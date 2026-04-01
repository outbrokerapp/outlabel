import { Button } from "@/components/ui/button";
import { Briefcase, Mail, MapPin, MessageCircle } from "lucide-react";

const whatsappMessage =
  "Olá! Vim pelo site da OutLabel e tenho interesse em conhecer a solução.";
const whatsappUrl = `https://wa.me/5511933530047?text=${encodeURIComponent(whatsappMessage)}`;

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.05 13.8c0 5.8-4.68 10.5-10.45 10.5-1.74 0-3.44-.43-4.93-1.25L4.1 24.45l1.54-4.47a10.43 10.43 0 0 1-2.46-6.7C3.18 7.48 7.86 2.8 13.64 2.8c2.78 0 5.4 1.08 7.36 3.05a10.4 10.4 0 0 1 3.05 7.95Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.15 10.05c.18-.44.49-.7.89-.7h.64c.29 0 .52.16.63.43l.47 1.38c.09.26.04.55-.15.75l-.54.69c.62 1.01 1.46 1.81 2.49 2.42l.71-.54c.21-.17.48-.2.73-.1l1.35.61c.28.13.43.42.39.73l-.09.54c-.09.52-.36.92-.79 1.15-.44.22-.95.3-1.47.2-1.36-.25-2.8-1.08-4.13-2.47-1.34-1.41-2.12-2.85-2.34-4.21-.09-.49-.03-.98.21-1.38Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * OutLabel - Soluções White Label
 * Design: Dark theme com gradiente azul-teal e laranja
 * Tipografia: Poppins (bold) para títulos, Sora para corpo
 * Efeitos: Glow/neon, gradientes, sombras
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0d4a5a]">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-cyan-500/20 bg-slate-950/65 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4 sm:py-5">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="OutLabel" className="h-12 w-12 rounded-lg" />
            <div className="text-white font-bold text-xl">OutLabel</div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
              <a href="#features" className="hover:text-cyan-400 transition">Funcionalidades</a>
              <a href="#presence" className="hover:text-cyan-400 transition">Presença</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contato</a>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="inline-flex items-center justify-center p-1 text-cyan-300 transition hover:text-cyan-200 active:text-cyan-100 md:hidden"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        {/* Background gradient orbs */}
        <div className="absolute left-[-4rem] top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:left-10 sm:h-96 sm:w-96"></div>
        <div className="absolute bottom-10 right-[-4rem] h-72 w-72 rounded-full bg-orange-500/10 blur-3xl sm:bottom-20 sm:right-10 sm:h-96 sm:w-96"></div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.85fr)] lg:gap-14">
            {/* Left content */}
              <div className="mx-auto max-w-2xl space-y-8 text-center lg:mx-0 lg:text-left">
                <div>
                  <h1 className="mb-4 text-4xl leading-tight text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4rem]">
                    Sua marca.<br />
                    <span className="gradient-text">Seu app.</span><br />
                    A mesma inteligência.
                  </h1>
                  <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300 sm:text-xl lg:mx-0">
                    O método é tecnológico, não estético. Transforme sua rede em sistema com a plataforma white label mais inteligente do mercado.
                  </p>
                </div>

                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-gray-200">Remove a barreira de "não é da nossa bandeira"</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-gray-200">Identidade da sua empresa para uso 100% interno</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-gray-200">Gestão descentralizada com padrão único</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start">
                  <Button
                    asChild
                    className="min-w-[220px] bg-cyan-500 px-8 py-6 text-lg font-bold text-black hover:bg-cyan-600"
                  >
                    <a href="#contact">
                      Conhecer Solução
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="min-w-[220px] border-cyan-500/50 px-8 py-6 text-lg text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right - Logo showcase */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[400px]">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-orange-500/20 blur-2xl"></div>
                  <div className="relative rounded-[2rem] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 p-6 backdrop-blur-sm sm:p-8">
                    <img src="/logo.jpg" alt="OutLabel Logo" className="w-full rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="section-space relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="container">
          <div className="section-panel grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:gap-14">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Escalou time, mas não escalou processo.
              </h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2">Centenas de escritórios</h3>
                  <p>Milhares de corretores com gestão descentralizada</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2">Ferramentas diferentes</h3>
                  <p>Em cada unidade, processos únicos e desconectados</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">Dor: Volume gigante com workflow pequeno</h3>
                  <p className="text-gray-400">Falta de padronização impede crescimento escalável</p>
                </div>
              </div>
            </div>

            <div className="interactive-info-card neon-border rounded-2xl p-6 space-y-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white">Solução OutLabel</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">612</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Imobiliárias</p>
                    <p className="text-sm text-gray-400">Uma só forma de trabalhar</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Corretores</p>
                    <p className="text-sm text-gray-400">Um único processo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section id="presence" className="section-space relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="container">
          <div className="section-panel">
            <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Presença Nacional
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
              Consolidada e capilarizada com integração direta aos principais bancos brasileiros
            </p>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="interactive-info-card neon-border rounded-2xl p-7 text-center sm:p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Padronização Imediata</h3>
                <p className="text-gray-300">Inúmeros corretores, um só processo</p>
              </div>
              <div className="interactive-info-card neon-border rounded-2xl p-7 text-center sm:p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Integração Bancária</h3>
                <p className="text-gray-300">Caixa, Itaú, Santander, Bradesco</p>
              </div>
              <div className="interactive-info-card neon-border rounded-2xl p-7 text-center sm:p-8 md:col-span-2 xl:col-span-1">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Transformação Digital</h3>
                <p className="text-gray-300">Rede em sistema, tudo conectado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-space relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="container">
          <div className="section-panel">
            <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Funcionalidades Completas
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-gray-300 sm:mb-12">
              Nada é cortado. Tudo é liberado. É o OutBroker original por dentro.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
              {[
                { title: "Cadastro de Imóveis", icon: "🏠", color: "orange" },
                { title: "Match Inteligente", icon: "🎯", color: "cyan" },
                { title: "CRM Integrado", icon: "📊", color: "orange" },
                { title: "Consultas & Financiamentos", icon: "💰", color: "cyan" },
                { title: "Seguros", icon: "🛡️", color: "orange" },
                { title: "Assinatura Digital", icon: "✍️", color: "cyan" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="interactive-info-card group neon-border flex min-h-[160px] flex-col rounded-2xl p-4 text-center sm:min-h-[unset] sm:p-8 sm:text-left"
                >
                  <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">
                    {feature.icon}
                  </div>
                  <h3
                    className={`mb-2 text-base font-bold leading-snug sm:text-xl ${feature.color === "cyan" ? "text-cyan-400" : "text-orange-400"}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-auto text-xs text-gray-400 sm:text-base">
                    Solução completa e integrada
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Label Section */}
      <section className="section-space relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="neon-border rounded-[2rem] p-7 sm:p-10 lg:p-14">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              O app veste a camiseta da sua bandeira.
            </h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <h3 className="text-cyan-400 font-bold text-lg mb-4">✓ Logo do parceiro & Domínio interno</h3>
                <h3 className="text-cyan-400 font-bold text-lg mb-4">✓ Ambiente fechado & Dados exclusivos</h3>
                <h3 className="text-orange-400 font-bold text-lg mb-4">Resultado: Adoção sem conflito cultural</h3>
              </div>
              <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 p-6 sm:p-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  A OutLabel remove a barreira mais importante: a identidade. Seus clientes usam seu app, com sua marca, seus dados, seu processo. Tudo isso com a tecnologia e inteligência do OutBroker.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-space relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="container">
          <div className="section-panel">
            <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Pronto para transformar sua rede?
            </h2>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* WhatsApp */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" 
                 className="interactive-info-card group neon-border rounded-2xl p-7 text-center sm:p-8">
                <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-cyan-400 font-semibold">(11) 93353-0047</p>
                <p className="text-gray-400 text-sm mt-2">Conversa rápida e direta</p>
              </a>

              {/* Email */}
              <a href="mailto:atendimento@outbroker.com.br" 
                 className="interactive-info-card group neon-border rounded-2xl p-7 text-center sm:p-8">
                <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-orange-400 font-semibold break-all text-sm">atendimento@outbroker.com.br</p>
                <p className="text-gray-400 text-sm mt-2">Proposta personalizada</p>
              </a>

              {/* Location */}
              <div className="interactive-info-card neon-border rounded-2xl p-7 text-center sm:p-8 md:col-span-2 xl:col-span-1">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Brasil</h3>
                <p className="text-gray-300 font-semibold">Presença Nacional</p>
                <p className="text-gray-400 text-sm mt-2">612 imobiliárias confiam em nós</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-black/20 py-12 backdrop-blur-sm">
        <div className="container">
          <div className="section-panel mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.jpg" alt="OutLabel" className="h-8 w-8 rounded" />
                <span className="font-bold text-white">OutLabel</span>
              </div>
              <p className="text-gray-400 text-sm">Soluções white label para imobiliárias</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-cyan-400 transition">Funcionalidades</a></li>
                <li><a href="#presence" className="hover:text-cyan-400 transition">Presença</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">WhatsApp</a></li>
                <li><a href="mailto:atendimento@outbroker.com.br" className="hover:text-cyan-400 transition">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">Sobre</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-2 text-center text-sm text-gray-400">
            <p>© 2026 OutLabel. Todos os direitos reservados. | Soluções white label para imobiliárias</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
