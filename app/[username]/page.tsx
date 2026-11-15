'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';

const PUBLIC_PROFILE_API =
  process.env.NEXT_PUBLIC_WISHE_PROFILE_API ||
  'https://us-central1-my-gifting-app-7feec.cloudfunctions.net/getPublicWisheProfile';

type PublicUser = {
  id: string;
  username: string;
  displayName: string;
  firstName?: string;
  profileImage?: string;
};

type PublicWish = {
  id: string;
  title: string;
  price: number;
  image?: string;
  contributorCount?: number;
};

type PublicProfileResponse = {
  profile: PublicUser;
  canonicalUsername: string;
  fulfilledWishes: PublicWish[];
  activeWishCount: number;
};

const getWishAmount = (wish: PublicWish) => {
  const value = Number(wish.price || 0);
  if (!Number.isFinite(value) || value <= 0) return '$0';
  return `$${Math.round(value).toLocaleString('en-US')}`;
};

const getWishImageSrc = (wish: PublicWish) => {
  const rawImage = wish.image || '';
  if (rawImage.startsWith('http://') || rawImage.startsWith('https://') || rawImage.startsWith('/')) return rawImage;
  if (rawImage === 'coffee_aesthetic') return '/coffee_aesthetic.jpg';
  if (rawImage === 'food_aesthetic') return '/food_aesthetic.jpg';
  return '';
};

const getContributorPreviewText = (wish: PublicWish) => {
  const count = Number(wish.contributorCount || 0);
  if (count <= 0) return 'Friends helped make this happen';
  return `${count} friend${count === 1 ? '' : 's'} helped make this happen`;
};

export default function PublicProfilePage() {
  const params = useParams<{ username: string }>();
  const requestedUsername = decodeURIComponent(params.username || '').replace(/^@/, '').toLowerCase();
  const [profileUser, setProfileUser] = useState<PublicUser | null>(null);
  const [fulfilledWishes, setFulfilledWishes] = useState<PublicWish[]>([]);
  const [activeWishCount, setActiveWishCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const displayName = profileUser?.displayName || requestedUsername;
  const firstName = profileUser?.firstName || displayName.split(' ')[0] || 'their';
  const activeWishPlaceholders = useMemo(
    () => Array.from(
      { length: Math.max(Math.min(activeWishCount, 3), 1) },
      (_, index) => ({ id: `active-${index + 1}` })
    ),
    [activeWishCount]
  );

  useEffect(() => {
    const controller = new AbortController();

    const loadPublicProfile = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setLoadError(false);
        const response = await fetch(
          `${PUBLIC_PROFILE_API}?username=${encodeURIComponent(requestedUsername)}`,
          { signal: controller.signal }
        );

        if (response.status === 404) {
          setProfileUser(null);
          setFulfilledWishes([]);
          setActiveWishCount(0);
          setNotFound(true);
          return;
        }
        if (!response.ok) throw new Error(`Profile request failed with ${response.status}`);

        const data = await response.json() as PublicProfileResponse;
        setProfileUser(data.profile);
        setFulfilledWishes(data.fulfilledWishes || []);
        setActiveWishCount(Number(data.activeWishCount || 0));

        if (data.canonicalUsername && data.canonicalUsername !== requestedUsername) {
          window.history.replaceState(null, '', `/${encodeURIComponent(data.canonicalUsername)}`);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        console.error('Failed to load public Wishe profile:', error);
        setLoadError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadPublicProfile();
    return () => controller.abort();
  }, [requestedUsername]);

  const openProfileInApp = () => {
    if (!profileUser) {
      window.location.assign('/download');
      return;
    }
    const startedAt = Date.now();
    window.location.assign(`wishe://gift-friend/${encodeURIComponent(profileUser.id)}`);
    window.setTimeout(() => {
      const appDidNotOpen = document.visibilityState === 'visible' && Date.now() - startedAt < 3500;
      if (appDidNotOpen) window.location.assign('/download');
    }, 1500);
  };

  if (!loading && (notFound || loadError)) {
    return (
      <main className="min-h-screen bg-[#f6f9ff] px-5 py-10 text-[#263244]">
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[430px] items-center">
          <div className="w-full rounded-[32px] bg-white p-7 text-center shadow-[0_18px_45px_rgba(107,156,255,0.18)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf2ff] text-3xl font-black text-[#6b9cff]">?</div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-[#6b9cff]">Wishe Profile</p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#1f2b3d]">
              {notFound ? `We couldn't find @${requestedUsername}` : 'This profile is unavailable right now'}
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#6f7d91]">
              {notFound
                ? 'The username may have changed, the shared link may be outdated, or the profile is no longer available.'
                : 'Please try again shortly, or open Wishe to continue.'}
            </p>
            <Link href="/download" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#6b9cff] px-5 py-4 text-sm font-black text-white">Open Wishe</Link>
            <Link href="/" className="mt-3 inline-flex px-4 py-2 text-sm font-bold text-[#6f7d91]">Go to wishe.app</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f9ff] px-5 py-8 text-[#263244]">
      <section className="mx-auto flex w-full max-w-[430px] flex-col gap-6">
        <div className="rounded-[32px] bg-white p-6 text-center shadow-[0_18px_45px_rgba(107,156,255,0.18)]">
          {profileUser?.profileImage ? (
            <img src={profileUser.profileImage} alt={`${displayName} profile`} className="mx-auto mb-4 h-20 w-20 rounded-full object-cover" />
          ) : (
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf2ff] text-3xl font-black text-[#6b9cff]">{(displayName || '?').charAt(0).toUpperCase()}</div>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6b9cff]">Wishe Profile</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#1f2b3d]">{loading ? 'Loading Wishe profile...' : `${displayName}'s Wishe`}</h1>
          <p className="mt-3 text-sm leading-6 text-[#6f7d91]">See what friends helped make come true, then open Wishe to view and contribute to current wishes.</p>
        </div>

        {!loading && profileUser ? (
          <>
            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-black text-[#1f2b3d]">Fulfilled Wishes</h2>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6b9cff] shadow-sm">Public</span>
              </div>
              <div className="flex flex-col gap-3">
                {fulfilledWishes.length > 0 ? fulfilledWishes.map((wish) => (
                  <div key={wish.id} className="flex items-center gap-4 rounded-[24px] bg-white p-4 shadow-[0_10px_28px_rgba(107,156,255,0.12)]">
                    {getWishImageSrc(wish) ? (
                      <img src={getWishImageSrc(wish)} alt={wish.title} className="h-16 w-16 rounded-[18px] object-cover" />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#eaf2ff] to-[#cfe0ff] text-2xl shadow-inner">🎁</div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6b9cff]">Completed ✦</p>
                      <h3 className="mt-1 truncate text-base font-black text-[#263244]">{wish.title}</h3>
                      <p className="mt-1 truncate text-xs font-semibold text-[#7b8798]">{getContributorPreviewText(wish)}</p>
                    </div>
                    <div className="rounded-full bg-[#6b9cff] px-3 py-2 text-sm font-black text-white">{getWishAmount(wish)}</div>
                  </div>
                )) : (
                  <div className="rounded-[24px] bg-white p-5 text-center text-sm font-bold text-[#6f7d91] shadow-[0_10px_28px_rgba(107,156,255,0.12)]">No fulfilled wishes are public yet.</div>
                )}
              </div>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-black text-[#1f2b3d]">Current Wishes</h2>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#9aa6b8] shadow-sm">In Wishe</span>
              </div>
              <div className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_14px_38px_rgba(107,156,255,0.14)]">
                <div className="flex flex-col gap-3 opacity-45 blur-[6px]">
                  {activeWishPlaceholders.map((wish) => (
                    <div key={wish.id} className="flex items-center gap-4 rounded-[22px] bg-[#f6f9ff] p-4">
                      <div className="h-14 w-14 rounded-[16px] bg-[#dbe8ff]" />
                      <div className="flex-1"><div className="h-3 w-32 rounded-full bg-[#c8d9f5]" /><div className="mt-3 h-3 w-44 rounded-full bg-[#dbe8ff]" /></div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/65 px-6 text-center backdrop-blur-[1px]">
                  <p className="text-xl font-black text-[#1f2b3d]">Open Wishe to see {firstName}&apos;s wishes</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f7d91]">Continue in the app to view current wishes and contribute securely.</p>
                  <button type="button" onClick={openProfileInApp} className="mt-4 rounded-full bg-[#6b9cff] px-6 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(107,156,255,0.3)]">Open in Wishe</button>
                </div>
              </div>
            </section>
          </>
        ) : null}
      </section>
    </main>
  );
}
