import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div>
      <ul className='flex justify-between m-10 items-center'>
        <div>
          <Link href='/'>
            <li>Home</li>
          </Link>
        </div>
        <div className='flex gap-10'>
          {/* User Button if signed in */}

          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* User In Button if not signed in */}

          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
