'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore, QueryDocumentSnapshot } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const missingFirebaseConfigKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (typeof window !== 'undefined') {
  console.log('Wishe web Firebase config check:', {
    projectId: firebaseConfig.projectId,
    authDomain: firebaseConfig.authDomain,
    storageBucket: firebaseConfig.storageBucket,
    missingFirebaseConfigKeys,
  });
}

const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


type PublicUser = {
  id: string;
  username?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
};


type PublicContributor = {
  uid?: string;
  name?: string;
  username?: string;
  profileImage?: string;
  avatar?: string;
  visibility?: string;
};

type PublicWish = {
  id: string;
  title: string;
  price: number;
  imageUri?: string;
  image?: string;
  productImage?: string;
  imagePath?: string;
  fulfilled?: boolean;
  deleted?: boolean;
  status?: string;
  amountReceived?: number;
  contributions?: number;
  contributors?: PublicContributor[];
  createdAt?: unknown;
};

const getDisplayName = (user: PublicUser | null, fallbackUsername: string) => {
  if (!user) {
    return fallbackUsername.charAt(0).toUpperCase() + fallbackUsername.slice(1);
  }

  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
  return user.name || fullName || user.username || fallbackUsername;
};

const getWishAmount = (wish: PublicWish) => {
  const value = Number(wish.price || wish.amountReceived || wish.contributions || 0);
  if (!Number.isFinite(value) || value <= 0) return '$0';
  return `$${Math.round(value).toLocaleString('en-US')}`;
};

const getWishImageSrc = (wish: PublicWish) => {
  const possibleImages = [wish.imageUri, wish.image, wish.productImage];
  const rawImage = possibleImages.find(
    (image): image is string => typeof image === 'string' && image.length > 0
  ) || '';

  if (!rawImage) return '';

  if (rawImage.startsWith('http://') || rawImage.startsWith('https://') || rawImage.startsWith('/')) {
    return rawImage;
  }

  if (rawImage === 'coffee_aesthetic') {
    return '/coffee_aesthetic.jpg';
  }

  if (rawImage === 'food_aesthetic') {
    return '/food_aesthetic.jpg';
  }

  return '';
};

const getVisibleContributors = (wish: PublicWish) => {
  return (wish.contributors || []).filter((contributor) => contributor.visibility !== 'full_anonymous');
};

const getContributorPreviewText = (wish: PublicWish) => {
  const visibleContributors = getVisibleContributors(wish);
  const contributorCount = wish.contributors?.length || Number(wish.contributions || 0) || 0;

  if (visibleContributors.length > 0) {
    const firstContributor = visibleContributors[0];
    const firstName = firstContributor.name || firstContributor.username || 'Someone';

    if (visibleContributors.length === 1) {
      return `${firstName} helped make this happen`;
    }

    return `${firstName} and ${visibleContributors.length - 1} others helped make this happen`;
  }

  if (contributorCount > 0) {
    return `${contributorCount} friend${contributorCount === 1 ? '' : 's'} helped make this happen`;
  }

  return 'Friends helped make this happen';
};

export default function PublicProfilePage() {
  const params = useParams<{ username: string }>();
  const username = decodeURIComponent(params.username || '').replace('@', '').toLowerCase();
  const [profileUser, setProfileUser] = useState<PublicUser | null>(null);
  const [fulfilledWishes, setFulfilledWishes] = useState<PublicWish[]>([]);
  const [activeWishCount, setActiveWishCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [debugInfo, setDebugInfo] = useState({
    username: '',
    projectId: firebaseConfig.projectId || 'missing',
    authDomain: firebaseConfig.authDomain || 'missing',
    missingKeys: missingFirebaseConfigKeys.join(', ') || 'none',
    usernameDocExists: 'not checked',
    userDocExists: 'not checked',
    wishesFound: 'not checked',
    error: '',
  });

  const displayName = useMemo(() => getDisplayName(profileUser, username), [profileUser, username]);
  const activeWishPlaceholders = useMemo(
    () => Array.from({ length: Math.max(activeWishCount, 1) }, (_, index) => ({ id: `active-${index + 1}` })),
    [activeWishCount]
  );

  useEffect(() => {
    const loadPublicProfile = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        console.log('Loading Wishe public profile for username:', username);

        const usernameDoc = await getDoc(doc(db, 'usernames', username));

        console.log('Username doc exists:', usernameDoc.exists());
        setDebugInfo(prev => ({ ...prev, username, usernameDocExists: usernameDoc.exists() ? 'yes' : 'no' }));

        if (!usernameDoc.exists()) {
          setProfileUser(null);
          setFulfilledWishes([]);
          setActiveWishCount(3);
          setNotFound(true);
          return;
        }

        const usernameData = usernameDoc.data() as { uid?: string };
        const profileUid = usernameData.uid;

        if (!profileUid) {
          setProfileUser(null);
          setFulfilledWishes([]);
          setActiveWishCount(3);
          setNotFound(true);
          return;
        }

        const userDoc = await getDoc(doc(db, 'users', profileUid));

        console.log('User doc exists:', userDoc.exists(), 'uid:', profileUid);
        setDebugInfo(prev => ({ ...prev, userDocExists: userDoc.exists() ? 'yes' : 'no' }));

        if (!userDoc.exists()) {
          setProfileUser(null);
          setFulfilledWishes([]);
          setActiveWishCount(3);
          setNotFound(true);
          return;
        }

        const userData = userDoc.data() as Omit<PublicUser, 'id'>;
        const foundUser = { id: userDoc.id, ...userData };
        setProfileUser(foundUser);

        console.log('Matched public user:', { id: userDoc.id, ...userData });

        const wishesSnapshot = await getDocs(collection(db, 'users', userDoc.id, 'wishes'));
        console.log('Wishes found for public user:', wishesSnapshot.size);
        setDebugInfo(prev => ({ ...prev, wishesFound: wishesSnapshot.size.toString() }));

        const wishes = wishesSnapshot.docs
          .map((wishDoc: QueryDocumentSnapshot<DocumentData>) => ({ id: wishDoc.id, ...wishDoc.data() }) as PublicWish)
          .filter((wish: PublicWish) => wish.deleted !== true && wish.status !== 'deleted_reallocated');

        const fulfilled = wishes.filter((wish) => wish.fulfilled === true);
        const active = wishes.filter((wish) => wish.fulfilled !== true);

        console.log('Public profile wish split:', {
          fulfilledCount: fulfilled.length,
          activeCount: active.length,
          fulfilled,
          active,
        });

        setFulfilledWishes(fulfilled);
        setActiveWishCount(active.length || 3);
      } catch (error) {
        console.error('Failed to load public Wishe profile:', error);
        setDebugInfo(prev => ({ ...prev, error: error instanceof Error ? error.message : String(error) }));
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    
    };

    loadPublicProfile();
  }, [username]);

  return (
    <main className="min-h-screen bg-[#f6f9ff] px-5 py-8 text-[#263244]">
      <section className="mx-auto flex w-full max-w-[430px] flex-col gap-6">
        <div className="rounded-[32px] bg-white p-6 text-center shadow-[0_18px_45px_rgba(107,156,255,0.18)]">
          {profileUser?.profileImage ? (
            <img
              src={profileUser.profileImage}
              alt={`${displayName} profile`}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf2ff] text-3xl font-black text-[#6b9cff]">
              {displayName.charAt(0)}
            </div>
          )}

          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6b9cff]">Wishe Profile</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#1f2b3d]">{displayName}&apos;s Wishe</h1>
          <p className="mt-3 text-sm leading-6 text-[#6f7d91]">
            {loading
              ? 'Loading their Wishe profile...'
              : notFound
              ? 'This Wishe profile could not be found yet.'
              : 'See what friends helped make come true. Join Wishe to view and gift their current wishes.'}
          </p>
        </div>

        {!notFound && (
          <>
            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-black text-[#1f2b3d]">Fulfilled Wishes</h2>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6b9cff] shadow-sm">Public</span>
              </div>

              <div className="flex flex-col gap-3">
                {loading ? (
                  <div className="rounded-[24px] bg-white p-5 text-center text-sm font-bold text-[#6f7d91] shadow-[0_10px_28px_rgba(107,156,255,0.12)]">
                    Loading fulfilled wishes...
                  </div>
                ) : fulfilledWishes.length > 0 ? (
                  fulfilledWishes.map((wish) => (
                    <div key={wish.id} className="flex items-center gap-4 rounded-[24px] bg-white p-4 shadow-[0_10px_28px_rgba(107,156,255,0.12)]">
                      {getWishImageSrc(wish) ? (
                        <img src={getWishImageSrc(wish)} alt={wish.title} className="h-16 w-16 rounded-[18px] object-cover" />
                      ) : (
  <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#eaf2ff] to-[#cfe0ff] text-2xl shadow-inner">
    🎁
  </div>
)}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6b9cff]">Completed ✦</p>
                        <h3 className="mt-1 truncate text-base font-black text-[#263244]">{wish.title}</h3>
                        <p className="mt-1 truncate text-xs font-semibold text-[#7b8798]">{getContributorPreviewText(wish)}</p>
                      </div>
                      <div className="rounded-full bg-[#6b9cff] px-3 py-2 text-sm font-black text-white">{getWishAmount(wish)}</div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[24px] bg-white p-5 text-center text-sm font-bold text-[#6f7d91] shadow-[0_10px_28px_rgba(107,156,255,0.12)]">
                    No fulfilled wishes are public yet.
                  </div>
                )}
              </div>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-black text-[#1f2b3d]">Current Wishes</h2>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#9aa6b8] shadow-sm">Locked</span>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_14px_38px_rgba(107,156,255,0.14)]">
                <div className="flex flex-col gap-3 blur-[6px]">
                  {activeWishPlaceholders.map((wish) => (
                    <div key={wish.id} className="flex items-center gap-4 rounded-[22px] bg-[#f6f9ff] p-4">
                      <div className="h-14 w-14 rounded-[16px] bg-[#dbe8ff]" />
                      <div className="flex-1">
                        <div className="h-3 w-32 rounded-full bg-[#c8d9f5]" />
                        <div className="mt-3 h-3 w-44 rounded-full bg-[#dbe8ff]" />
                      </div>
                      <div className="h-8 w-14 rounded-full bg-[#6b9cff]" />
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 px-6 text-center backdrop-blur-[1px]">
                  <p className="text-xl font-black text-[#1f2b3d]">Join Wishe to see current wishes</p>
                  <p className="mt-2 text-sm leading-6 text-[#6f7d91]">
                    Their active wishes are private until you open a Wishe profile.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        <div className="rounded-[24px] border border-[#dbe8ff] bg-white p-4 text-left text-xs text-[#263244] shadow-[0_10px_28px_rgba(107,156,255,0.10)]">
          <p className="mb-2 font-black text-[#6b9cff]">Firebase Debug</p>
          <p>username: {debugInfo.username || username}</p>
          <p>projectId: {debugInfo.projectId}</p>
          <p>authDomain: {debugInfo.authDomain}</p>
          <p>missing env keys: {debugInfo.missingKeys}</p>
          <p>username doc exists: {debugInfo.usernameDocExists}</p>
          <p>user doc exists: {debugInfo.userDocExists}</p>
          <p>wishes found: {debugInfo.wishesFound}</p>
          {debugInfo.error ? <p className="mt-2 font-bold text-red-500">error: {debugInfo.error}</p> : null}
        </div>

        <div className="rounded-[30px] bg-[#1f2b3d] p-5 text-center text-white shadow-[0_18px_45px_rgba(31,43,61,0.22)]">
          <p className="text-sm leading-6 text-white/82">
            No more random gifts. Join Wishe to gift people something they actually want.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#6b9cff] px-5 py-4 text-sm font-black text-white shadow-[0_10px_24px_rgba(107,156,255,0.35)]"
          >
            Get Wishe
          </Link>
        </div>
      </section>
    </main>
  );
}