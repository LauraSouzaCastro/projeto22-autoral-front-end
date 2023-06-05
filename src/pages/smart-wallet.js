import dynamic from 'next/dynamic';

const SmartWallet = dynamic(
    () => import('@/components/SmartWallet'),
    { ssr: false }
)
export default SmartWallet;