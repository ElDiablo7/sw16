import type { Metadata } from 'next';
import HomeContent from './home-content';

export const metadata: Metadata = {
  title: "SW16 Moves | London's Most Trusted Local Removals",
  description: "House moves, single items, nationwide coverage — fully insured & professional service at competitive prices.",
};

export default function Page() {
  return <HomeContent />;
}
