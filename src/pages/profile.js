import dynamic from 'next/dynamic';

const Profile = dynamic(
    () => import('@/components/Profile'),
    { ssr: false }
)
export default Profile;