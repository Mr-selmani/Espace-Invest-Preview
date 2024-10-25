'use client';
import DefaultLayout from '@/components/defaultLayout';
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function EspaceInvest() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    const { email, mot_de_passe } = data;

    try {
      const response = await fetch('/api/signup'); 
      const result = await response.json();

      if (response.ok) {
        const user = result.users.find(user => user.email === email && user.password === mot_de_passe);
        if (user) {
          // Set cookie with the email
          document.cookie = `user=${email}`;
          window.location.href = '/dashboard';
        } else {
          alert('Invalid email or password.');
        }
      } else {
        console.error('Failed to fetch users:', result.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <DefaultLayout>
      <main className="flex min-h-screen mobile:h-fit">
        <div className="w-1/2 mobile:w-full h-full m-auto p-5 mobile:py-20 flex items-center justify-center">
          <div className="flex flex-col max-w-[450px] mx-auto gap-4"> 
            <h1 className="text-4xl font-bold text-center">Espace Invest</h1>
            <p className="text-sm text-[#A8A7BB]">
              Upform is your go-to tool to simplify your data collection boosting your productivity and perfecting your client management.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#A8A7BB] font-normal">Adresse email</label>
                <input placeholder="exemple@email.com" {...register("email")} className="border p-4 rounded-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#A8A7BB] font-normal">Mot de passe</label>
                <input type="password" {...register("mot_de_passe")} className="border p-4 rounded-xl" />
              </div>
              <Link href='#' className="text-center text-base underline font-light text-[#A8A7BB]">Mot de passe oublié ?</Link>
              <button type="submit" className="bg-[#2597D3] text-white p-4 rounded-lg w-10/12 mx-auto text-center">
                Me connecter
              </button>
              <div className="relative flex">
                <div className="absolute left-0 top-1/2 translate-y-1/2 w-full h-[1px] bg-black" />
                <span className="text-center px-4 bg-white relative mx-auto leading-none text-sm">OU</span>
              </div>
              <Link href="/signup" className="bg-[#2597D3] text-white p-4 rounded-lg w-10/12 text-center mx-auto">
                Créer un compte
              </Link>
            </form>
          </div>
        </div>
        <div className="w-1/2 mobile:hidden">
          <img
            src="/assets/images/landing-image.jpeg"
            className="w-full h-full object-cover"
            width={1000} height={600}
          />
        </div>
      </main>
    </DefaultLayout>
  );
}
