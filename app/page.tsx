'use client'

import { TypeWriteAnimation } from "./components/TypingAnimation";
import { useState, useEffect } from "react";
import FontProviderComponent from "./components/FontProviderComponent";
import { CodeSnippet } from "./components/CodeSnippet";
import { TypeAnimation } from "react-type-animation";


export default function Home() {

  const [opacity, setOpacity] = useState(1); // Inicialmente 100% opaco

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 300, 0);
      if (newOpacity <= 0.2) {
        document.getElementById('animated-arrow')?.classList.remove('animate-pulse')
      }
      if (newOpacity >= 0.3) {
        document.getElementById('animated-arrow')?.classList.add('animate-pulse')
      }
      if (scrollY > 821) {
        document.getElementById('profile-card')?.classList.add('w-36')
      }
      if (scrollY < 821) {
        document.getElementById('profile-card')?.classList.remove('w-36')
      }
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 fixed top-5 right-8 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <span />
        <div className="fixed flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            id="profile-card"
            className="pointer-events-none flex place-items-center transition-all gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/matrizz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 px-3 w-52 h-14 items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              <img src="https://avatars.githubusercontent.com/u/95687945?v=4" className="rounded-full size-8" alt="" />
              <div className="flex text-xs justify-start flex-col">
                By{" "}
                <FontProviderComponent as="span" className="uppercase text-sm" children={'matrizz'} />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full h-32">

      </div>
      <div className="relative mt-6 z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <FontProviderComponent as="pre" className="drop-shadow-[0_0_0.3rem_#ffffff70] text-5xl font-extrabold" children={
          <>
            Rate Limit Test {`\n`}
            <span className="text-base drop-shadow-[0_0_0.3rem_#ffffff70] font-bold relative bottom-3">
              with {' '}
            </span>
            <TypeAnimation speed={50} deletionSpeed={19} repeat={999} sequence={['Login', 2500, 'API call', 2500]} />

          </>
        } />

      </div>

      <div className="w-full h-5 items-center flex flex-col justify-center text-center my-12">

        <a href="/login">

          <button className="w-max h-min text-center py-2 mt-8 group rounded-lg border border-transparent px-4 flex gap-2 items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            Start now {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none">
              <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
          </button>
        </a>
      </div>
      <div className="text-center">
        <TypeWriteAnimation string={['Bem-vindo ao Rate Limit Test, uma plataforma projetada para desenvolvedores e entusiastas de tecnologia testarem e entenderem como as políticas de rate limiting funcionam em aplicações web.']} />
      </div>
      <div className="w-full h-96 flex justify-center">
        <p onClick={() => window.scrollTo({ top: 780, behavior: "smooth" })} id={'animated-arrow'} style={{ opacity }} className="absolute cursor-pointer bottom-0 rotate-90 animate-pulse text-zinc-50 w-min h-min text-3xl">
          -&gt;
        </p>
      </div>
      <div className="mb-32 gap-5 flex flex-col text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        <div className="flex gap-2 h-52 justify-start ">

          <div className="max-w-lg group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

            <h2 className="mb-3 text-2xl font-semibold">
              O que é Rate Limiting? {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className="m-0 max-w-max text-sm opacity-50">
              Rate limiting é uma técnica usada para controlar a quantidade de solicitações que um usuário, ou um cliente, pode fazer a um servidor em um determinado período de tempo. Esse mecanismo é essencial para proteger APIs e serviços contra abusos, garantindo que os recursos sejam utilizados de maneira justa e eficiente.
            </p>
          </div>

          <CodeSnippet />
        </div>


        <div className="flex justify-end">

          <div className="group rounded-lg text-end max-w-lg row-end-1 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Por que testar com login?
            </h2>
            <p className="m-0 max-w-max text-sm opacity-50">
              Nosso site oferece uma experiência prática onde você pode testar cenários de rate limiting em um ambiente seguro. Ao utilizar um sistema de login, você pode simular diferentes usuários e verificar como as políticas de rate limiting afetam as interações autenticadas. Isso permite que você veja na prática como as implementações de rate limiting podem melhorar a segurança e a performance de suas aplicações.
            </p>
          </div>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Outros recursos{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </div>
      </div>
      <footer className="relative -bottom-12 mt-5 pt-8">
        <p className="text-center text-sm text-white/50">Powered by <a href="https://vercel.com" className="transition-colors ease-in-out hover:text-white" about="Vercel website">Vercel</a></p>
        <p className="text-center text-sm text-white/50">Developed by <a href="https://github.com/matrizz" className="transition-colors ease-in-out hover:text-white" about="">matrizz</a></p>
        <div className="flex items-center justify-center text-center">
          <span className="flex text-sm text-white/40 text-center border border-white/10 rounded px-2 mt-2 bg-white/5"><i>Atividade - Segurança da Informação - 2024</i></span>
        </div>
      </footer>
    </main >
  );
}
