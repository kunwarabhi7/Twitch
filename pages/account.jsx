import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    console.log(session)
    return (
      <div className="w-full h-24 bg-black text-white">
<p className=" text-xl w-48 h-12 pt-36 text-white ml-[580px] ">        Signed in as {session.user.email} </p>
<p className=" text-xl w-48 h-12 pt-36 text-white ml-[580px] ">        Welcome Mr. {session.user.name} </p>
<img src={session.user.name} alt="/" className="rounded-full h-10 w-16" />
        <button className="bg-blue w-48 h-12 text-4xl text-green-700 pt-40 ml-[580px]" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="w-full h-24 bg-black text-white">
      <p className=" text-8xl w-[900px] h-12 pt-36 text-white ml-[420px] "> Not signed in ? </p>
      <button className="bg-blue w-96 h-12 text-7xl text-green-700 pt-40 ml-[500px]" onClick={() => signIn()}>Sign in</button>
    </div>
  )
}