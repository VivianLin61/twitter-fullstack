import { Feed } from '@/components/Feed';
import TweetModal from '@/components/TweetModal';

export default function Home() {
  return (
    <main>
      <TweetModal />
      <Feed />
    </main>
  );
}
