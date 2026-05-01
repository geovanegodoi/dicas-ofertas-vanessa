import { Search, TicketPercent } from 'lucide-react'
import avatarImg from '../assets/avatar.png'

const MagaluLogo = () => (
  <svg viewBox="0 0 200 70" className="h-10 w-auto object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="100"
      y="48"
      textAnchor="middle"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
      fontSize="40"
      fontWeight="700"
      fill="#0086FF"
      letterSpacing="-1"
    >
      magalu
    </text>
  </svg>
)

const MercadoLivreLogo = () => (
  <img
    src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/7.26.0/mercadolibre/pt_logo_large_plus@2x.webp"
    alt="Mercado Livre"
    className="h-12 w-auto object-contain"
  />
)

const ShopeeLogo = () => (
  <svg viewBox="0 0 220 90" className="h-10 w-auto object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 25 L95 25 L100 78 Q100 82 96 82 L54 82 Q50 82 50 78 Z" fill="#EE4D2D" />
    <path d="M65 25 Q65 12 75 12 Q85 12 85 25" stroke="#EE4D2D" strokeWidth="3" />
    <text x="75" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#fff" fontStyle="italic">
      S
    </text>
    <text x="160" y="60" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#EE4D2D">
      Shopee
    </text>
  </svg>
)

const AmazonLogo = () => (
  <svg viewBox="0 0 200 70" className="h-10 w-auto object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="100" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="700" fill="#111">
      amazon
    </text>
    <path d="M55 52 Q100 70 145 52" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" />
    <path d="M140 50 L148 52 L143 58" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.56-1.7A12.77 12.77 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16.001 3.2Zm0 23.36a10.5 10.5 0 0 1-5.36-1.46l-.38-.22-3.9 1.01 1.04-3.8-.25-.39A10.55 10.55 0 1 1 26.56 16c0 5.83-4.73 10.56-10.56 10.56Zm5.79-7.9c-.32-.16-1.88-.93-2.17-1.03-.29-.1-.5-.16-.71.16-.21.32-.81 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.39 4.76.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.07-.13-.29-.21-.61-.37Z" />
  </svg>
)

const logos = [
  { key: 'magalu-1', component: <MagaluLogo /> },
  { key: 'mercado-1', component: <MercadoLivreLogo /> },
  { key: 'shopee-1', component: <ShopeeLogo /> },
  { key: 'amazon-1', component: <AmazonLogo /> },
  { key: 'magalu-2', component: <MagaluLogo /> },
  { key: 'mercado-2', component: <MercadoLivreLogo /> },
  { key: 'shopee-2', component: <ShopeeLogo /> },
  { key: 'amazon-2', component: <AmazonLogo /> },
]

export default function LandingPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: 'var(--brand-pink-bg)' }}
    >
      <div className="mx-auto flex min-h-screen max-w-[440px] flex-col px-6 pb-10 pt-10">

        {/* Avatar */}
        <div className="flex justify-center">
          <div
            className="rounded-full p-1.5"
            style={{
              background: 'linear-gradient(135deg, var(--brand-pink) 0%, var(--brand-pink-soft) 100%)',
            }}
          >
            <div
              className="rounded-full p-1"
              style={{ backgroundColor: 'var(--brand-pink-bg)' }}
            >
              <img src={avatarImg} alt="Vanessa" className="h-44 w-44 rounded-full object-cover" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="mt-6 text-center text-[28px] font-semibold"
          style={{
            color: 'oklch(0.42 0.09 15)',
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: '35px',
          }}
        >
          Dicas e Ofertas da Vanessa
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-center text-[15px] leading-relaxed text-gray-700">
          Aqui você encontra ofertas de qualidade e com bom gosto por um preço que cabe no seu bolso!
        </p>

        {/* Logos carousel */}
        <div className="mt-6">
          <div
            className="rounded-3xl px-4 py-3 shadow-sm overflow-hidden"
            style={{ backgroundColor: 'var(--brand-pink-soft)' }}
          >
            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll" style={{ width: 'max-content' }}>
                {logos.map(({ key, component }) => (
                  <div
                    key={key}
                    className="flex min-w-0 shrink-0 items-center justify-center px-3"
                    style={{ width: '120px' }}
                  >
                    {component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature list */}
        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: 'var(--brand-pink-soft)',
                color: 'var(--brand-wine)',
              }}
            >
              <Search className="h-5 w-5" aria-hidden="true" strokeWidth={2.2} />
            </span>
            <p className="pt-1 text-[14.5px] leading-snug text-gray-700">
              Ofertas pesquisadas e avaliadas pra garantir menor preço e melhor qualidade
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: 'var(--brand-pink-soft)',
                color: 'var(--brand-wine)',
              }}
            >
              <TicketPercent className="h-5 w-5" aria-hidden="true" strokeWidth={2.2} />
            </span>
            <p className="pt-1 text-[14.5px] leading-snug text-gray-700">
              Entre agora no Grupo de promoções e cupons de desconto
            </p>
          </li>
        </ul>

        {/* WhatsApp CTA */}
        <a
          href="https://chat.whatsapp.com/JLCMoHd1eFO370uEbpWwjJ"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => (window as any).fbq?.('track', 'Lead')}
          className="mt-7 flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-[19px] font-bold text-white shadow-lg transition-transform active:scale-[0.98]"
          style={{
            backgroundColor: 'var(--brand-whatsapp)',
            boxShadow: '0 10px 24px -8px rgba(37, 195, 90, 0.55)',
          }}
        >
          <span className="text-center leading-tight">
            Entrar no grupo
            <br />
            do WhatsApp
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <WhatsAppIcon />
          </span>
        </a>

      </div>
    </main>
  )
}
