import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>...</div>;
  }

  if (status === 'authenticated') {
    return (
      <Link href={'/profile'}>
        <Image
          src={session.user?.image ?? 'https://links.papareact.com/gll'}
          width={32}
          height={32}
          alt={session.user?.name ?? 'User Avatar'}
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()}> Iniciar Sesion</button>;
}

export function SingOutButton() {
  return <button onClick={() => signOut()}>Cerrar Sesion </button>;
}
