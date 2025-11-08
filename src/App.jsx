import { LanguageProvider, useLanguage, T, useTranslate } from './LanguageContext';
import { useState, useEffect, useRef } from 'react';
import {Shield, ShieldCheck, ShieldAlert, CreditCard, Handshake, FileCheckCorner, UserRoundCheck, Building, Building2, Banknote, FileX, CalendarCheck, Scale, FileSearch, Briefcase} from 'lucide-react';


// Enhanced scroll animation hook with stagger
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Parallax effect hook
function useParallax(speed = 0.5) {
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      ref.current.style.transform = `translateY(${rate}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}

// Header Component
function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="h-40 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="flex items-center gap-3">
            <img src="images/kettera_logo.png" alt="Kettera" className="h-28 max-h-32 object-contain"/>
          </div>
        </a>
          
          <nav className="hidden lg:flex gap-10 text-base font-medium">
            <a href="#problem" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="El problema" en="Problem" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#approach" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="Nuestro enfoque" en="Approach" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#products" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="Productos" en="Products" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#how" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="Cómo funciona" en="How it works" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#trust" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="Confianza" en="Trust" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#costs" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="Costos" en="Costs" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#apply" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="Solicita" en="Apply" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#faq" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group text-lg">
              <T es="FAQ" en="FAQ" />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="flex gap-4 items-center">
            <button 
              onClick={toggleLanguage}
              className="px-5 py-2.5 rounded-full border border-gray-200 text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              {lang === 'es' ? 'ES / EN' : 'EN / ES'}
            </button>
            <a href="#apply" className="px-6 py-2.5 bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <T es="Solicita tu línea" en="Apply now" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  useScrollAnimation();
  const t = useTranslate();
  const parallaxRef = useParallax(0.3);
  
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={parallaxRef} className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left space-y-8">
            <div className="hidden items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-base font-medium border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <T es="Financiamiento profesional" en="Professional financing" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
              <T 
                es="Sin esperas. Sin deudas. Solo liquidez inmediata." 
                en="No waiting. No debt. Just immediate liquidity." 
              />
            </h1>
            
            <p className="text-gray-600 text-xl leading-relaxed">
              <T 
                es="Cotización en 72 horas. Financiamiento en 24 horas una vez aprobado." 
                en="Indicative quote in 72 hours. Funding in 24 hours once approved." 
              />
            </p>
            
            <div className="flex gap-3 flex-wrap">
              <span className="px-5 py-2 rounded-full text-base text-gray-700 bg-gray-50 border border-gray-200"><T es="Venta verdadera" en="True Sale"/></span>
              <span className="px-5 py-2 rounded-full text-base text-gray-700 bg-gray-50 border border-gray-200">
                <T es="Sin recurso" en="Non‑recourse" />
              </span>
              <span className="px-5 py-2 rounded-full text-base text-gray-700 bg-gray-50 border border-gray-200">
                <T es="Fuera de balance" en="Off balance sheet" />
              </span>
            </div>
            
            <div className="flex gap-4 flex-wrap pt-4">
              <a href="#apply" className="px-8 py-4 bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                <T es="Solicita tu línea" en="Apply now" />
              </a>
              <a href="#costs" className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2">
                <T es="Calcula tu costo" en="Estimate costs" />
              </a>
            </div>
          </div>
          
          <div className="fade-in-right">
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(10,91,211,0.3)] transition-all duration-700 p-8 group hover:border-[#0A5BD3]/30">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                <T es="Solicitud rápida" en="Quick apply" />
              </h3>
              <form className="grid gap-4">
                <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 text-base" placeholder={t('Empresa', 'Company')}  />
                <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 text-base" placeholder="RFC" />
                <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 text-base" placeholder="Email" type="email" />
                <button type="button" className="px-6 py-4 bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <T es="Solicitar contacto" en="Request contact" />
                </button>
                <p className="text-base text-gray-500">
                <T es="Al enviar aceptas nuestro Aviso de Privacidad" en="By submitting you accept our Privacy Notice."/>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Metrics Bar
function MetricsBar() {
  return (
    <div className="py-12 border-y border-gray-100 bg-gradient-to-r from-blue-50/30 via-white to-blue-50/30">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-base">
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-medium"><T es="Clientes establecidos" en="Established clients"/></span>
            <strong className="text-2xl text-gray-900">MX</strong>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-medium"><T es="Límites por deudor" en="Limits per debtor"/></span>
            <strong className="text-2xl text-gray-900"><T es="Sí" en="Yes"/></strong>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-medium"><T es="Venta verdadera" en="True Sale"/></span>
            <strong className="text-2xl text-gray-900"><T es="Enfoque" en="Approach"/></strong>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 font-medium"><T es="Cuentas de control" en="Control accounts"/></span>
            <strong className="text-2xl text-gray-900"><T es="Por deudor" en="By debtor"/></strong>
          </div>
        </div>
      </div>
    </div>
  );
}

// Problem Section
function Problem() {
  useScrollAnimation();
  
  return (
    <section id="problem" className="py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              <T es="El problema" en="The problem" />
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 text-justify">
              <T 
                es="Tus clientes pagan a 60, 90 o hasta 120 días. Mientras tanto, tu negocio necesita liquidez para operar y crecer. Los bancos tardan meses y piden garantías; los fintechs genéricos ofrecen líneas pequeñas y poco confiables."
                en="Your buyers pay in 60, 90 or even 120 days. Meanwhile you need liquidity to operate and grow. Banks take months and demand collateral; generic fintechs offer small, unreliable lines."
              />
            </p>
          </div>
          <div className="fade-in-right">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4"><T es="Velocidad fintech. Disciplina bancaria." en="Fintech speed. Bank discipline."/></h3>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                 <T es="Evaluación de crédito con estándares bancarios" en="Bank‑grade underwriting"/>
                </li>
                <li className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <T es="Límites individuales por deudor (comprador)" en="Buyer‑specific limits"/>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <T es="Líneas autoliquidables" en="Self‑liquidating facilities"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  useScrollAnimation();

  return (
    <section id="approach" className="py-32 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              <T es="Nuestro enfoque" en="Our approach" />
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 text-justify">
              <T 
                es="No damos líneas genéricas basadas en % de ventas. Analizamos cada relación vendedor–comprador usando datos del SAT (CIEC) y su comportamiento de pago."
                en="We don't do blunt % of sales lines. We analyze each seller→buyer relationship using SAT (CIEC) data and real payment behavior."
              />
            </p>
            <p className="text-gray-600 text-xl leading-relaxed text-justify">
              <T 
                es="Establecemos límites específicos por deudor. Resultado: líneas más grandes, más estables y confiables que los modelos genéricos."
                en="We set specific limits per obligor. Result: larger, steadier, more reliable facilities than generic models."
              />
            </p>
          </div>
          <div className="grid gap-6 fade-in-right text-base">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 text-lg text-gray-800">
              <T 
                es="Venta verdadera (true sale) y enfoque sin recurso: la operación sale de tu balance y se autoliquida con el pago del deudor"
                en="True sale with non‑recourse focus: the receivable comes off your balance sheet and self‑liquidates when the buyer pays"
              />
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 text-lg text-gray-800">
              <T 
                es="Disciplina de cobranza con cuentas de control por deudor e instrucciones notariales"
                en="Collections discipline with per‑obligor control accounts and notary instructions"
              />
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 text-lg text-gray-800">
              <T 
                es="Priorizamos cuentas por cobrar aseguradas cuando aplica"
                en="We prioritize insured receivables where applicable"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How it Works Section
function HowItWorks() {
  useScrollAnimation();
  
  return (
    <section id="how" className="py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            <T es="Cómo funciona" en="How it works" />
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group stagger-item flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileCheckCorner className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              <T es="Conecta y comparte" en="Connect and share" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <T es="RFC y facturas vía SAT (CIEC) + información básica." en="RFC and invoices via SAT (CIEC) + basic information."
              />
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group stagger-item flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <UserRoundCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              <T es="Analizamos y dimensionamos" en="Analyze and size" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <T 
                es="Límites por deudor según comportamiento real."
                en="Limits per obligor based on real behavior."
              />
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group stagger-item flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              <T es="Onboarding y notificaciones" en="Onboarding and notices" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <T 
                es="KYC/AML, contratos digitales, cuentas STP, aviso por notario."
                en="KYC/AML, digital contracts, STP accounts, notary notice."
              />
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group stagger-item flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Banknote className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              <T es="Fondeo continuo" en="Continuous funding" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <T 
                es="Post‑onboarding, facturas elegibles típicamente en 24h."
                en="Post-onboarding, eligible invoices typically in 24h."
              />
            </p>
          </div>
        </div>
        <p className="text-base text-gray-500 mt-8 text-center">
          <T 
            es="*Tiempos sujetos a documentación, límites aprobados y horarios operativos."
            en="*Timing subject to documentation, approved limits and operating hours."
          />
        </p>
      </div>
    </section>
  );
}


// Products Section
function Products() {
  useScrollAnimation();
  
  return (
    <section id="products" className="py-32 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            <T es="Productos" en="Products" />
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-500"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                <T es="Factoraje (CxC)" en="Receivables (Factoring)" />
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Anticipo hasta 80% (reserva típica 20%)" en="Advance up to 80% (typical 20% reserve)" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Venta verdadera; enfoque sin recurso" en="True sale; non‑recourse focus" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Fuera de balance; autoliquidable" en="Off balance sheet; self‑liquidating" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Potencial beneficio de IVA: devenga al cobro del deudor*" en="Potential VAT benefit: accrues upon buyer payment*" />
                </li>
              </ul>
              <p className="text-base text-gray-500 mt-4">
                <T 
                  es="* El tratamiento de IVA depende del régimen aplicable y del caso particular."
                  en="* VAT treatment depends on the applicable regime and specific case."
                />
              </p>
            </div>
          </div>
          
          <div className="group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-500"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                <T es="Confirming (CxP)" en="Confirming (Payables)" />
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Pago anticipado a proveedores" en="Early pay to suppliers" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Conserva descuentos" en="Keep discounts" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Estabiliza tu cadena de suministro" en="Stabilize your supply chain" />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-500"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                <T es="Soluciones programáticas" en="Programmatic solutions" />
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Programas anclados a grandes compradores" en="Facilities anchored to large buyers" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="Estructuradas y aseguradas" en="Structured and insured" />
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <T es="A la medida" en="Tailored" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// COMPONENTE: WHO WE SERVE

function WhoWeServe() {
  useScrollAnimation();

  return (
    <section id="who" className="py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            <T es="A quién servimos" en="Who we serve" />
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              <T 
                es="PYMES y empresas establecidas en México que trabajan con grandes deudores de alta calidad y buscan líneas de MXN 2m+ (ideal MXN 5m+)."
                en="SMEs and established companies in Mexico that work with large, high-quality obligors and seek facilities of MXN 2m+ (ideally MXN 5m+)."
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

console.log("Hola, soy el desarrollador de esta página web, espero que te guste mi trabajo! :)");

// Trust Section
function Trust() {
  useScrollAnimation();
  
  // Logos que se muestran en el slider
  const logos = [
    { 
      name: 'CNBV', 
      desc: 'Comisión Nacional Bancaria y de Valores', 
      img: '/images/CNBV.png',
      url: 'https://www.gob.mx/cnbv'
    },
    { 
      name: 'CONDUSEF', 
      desc: 'Protección al Usuario Financiero', 
      img: '/images/CONDUSEF.png',
      url: 'https://www.condusef.gob.mx/'
    },
    { 
      name: 'Buró de Crédito', 
      desc: 'Información Crediticia', 
      img: '/images/BUROCREDITO.png',
      url: 'https://www.burodecredito.com.mx/'
    },
    { 
      name: 'ASOFOM', 
      desc: 'Asociación de SOFOM', 
      img: '/images/ASOFOM.png',
      url: 'https://asofom.mktdigitalmx.com/'
    },
  ];
  
  // loop infinito
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  
  return (
    <section id="trust" className="py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              <T es="Por qué confiar en Kettera" en="Why trust Kettera" />
            </h2>
            <div className="grid gap-6">
              {[
                { 
                  es: 'Marco regulatorio CNBV/SHCP; sujetos a CONDUSEF', 
                  en: 'CNBV/SHCP regulatory ecosystem; subject to CONDUSEF',
                  icon: Scale,
                  gradient: 'from-blue-500 to-blue-600'
                },
                { 
                  es: 'Reportamos a sociedades de información crediticia (p.ej. Buró de Crédito)', 
                  en: 'We report to credit information societies (e.g., Buró de Crédito)',
                  icon: FileSearch,
                  gradient: 'from-purple-500 to-purple-600'
                },
                { 
                  es: 'Miembros de ASOFOM', 
                  en: 'Member of ASOFOM',
                  icon: Briefcase,
                  gradient: 'from-indigo-500 to-indigo-600'
                },
                { 
                  es: 'KYC/AML, RUG, cuentas de control e instrucciones notariales', 
                  en: 'KYC/AML, RUG, per‑obligor control accounts and notary notices',
                  icon: ShieldCheck,
                  gradient: 'from-emerald-500 to-emerald-600'
                },
                { 
                  es: 'Estructuras de true sale fuera de balance', 
                  en: 'True‑sale structures that are off balance sheet',
                  icon: Building,
                  gradient: 'from-cyan-500 to-cyan-600'
                }
              ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 group">
                <div className="flex items-center gap-5">
                  {/* Iconos */}
                  <div className="flex-shrink-0">
                    <item.icon className="w-9 h-9 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-gray-900 font-semibold text-[16px] leading-[1.3] m-0">
                      <T es={item.es} en={item.en} />
                    </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          
          {/* SLIDER INDEPENDIENTE Y ELEGANTE */}
          <div className="fade-in-right flex flex-col justify-center">
            <p className="text-base text-gray-500 mb-8 font-medium uppercase tracking-wider text-center hidden">
              <T es="Respaldados por" en="Backed by" />
            </p>
            
            {/* Contenedor del slider con overflow hidden */}
            <div className="relative w-full overflow-hidden bg-gradient-to-r from-white via-gray-50 to-white py-12 rounded-3xl border border-gray-200">
              {/* Slider que se mueve infinitamente */}
              <div className="flex animate-slide gap-12">
                {duplicatedLogos.map((logo, index) => (
                  <a 
                    key={index} 
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-72 group cursor-pointer"
                  >
                    <div className="h-44 bg-white border-2 border-gray-200 rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg hover:shadow-2xl hover:border-blue-500 hover:scale-105 transition-all duration-500">
                      {/* Mostrar los logos */}
                      {logo.img ? (
                        <img src={logo.img} alt={logo.name} className="h-20 w-auto object-contain mb-3 group-hover:opacity-100 transition-all duration-300"/>
                      ) : (
                        <div className="text-3xl font-bold text-gray-900 mb-3 text-center">
                          {logo.name}
                        </div>
                      )}
                      <div className="text-base text-gray-600 text-center leading-tight">
                        {logo.desc}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// COMPONENTE: COMPARISON

function Comparison() {
  useScrollAnimation();

  return (
    <section id="comparison" className="hidden py-32 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            <T es="¿Cómo nos comparamos?" en="How do we compare?" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bancos */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 fade-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <T es="Bancos" en="Banks" />
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              <T 
                es="Capital más barato pero lento; exigen colaterales duros; meses de espera."
                en="Cheaper but slow; want hard collateral; months to set up."
              />
            </p>
            <ul className="space-y-2 text-base text-gray-500">
              <li>✓ Tasas más bajas</li>
              <li>✗ </li>
              <li>✗ </li>
              <li>✗</li>
            </ul>
          </div>

          {/* Fintechs Genéricos */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <T es="Fintechs genéricos" en="Generic fintechs" />
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              <T 
                es="Alta velocidad, pero líneas pequeñas (% de ventas), riesgo de cobranza en el cliente."
                en="Fast signup, but small % of sales lines; borrower keeps collection risk."
              />
            </p>
            <ul className="space-y-2 text-base text-gray-500">
              <li>✓ Credito rápido</li>
              <li>✗ </li>
              <li>✗ </li>
              <li>✗ </li>
            </ul>
          </div>

          {/* Kettera */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 fade-in-right relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-base font-medium">
                <T es="Mejor opción" en="Best choice" />
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-2">Kettera</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <T 
                es="Límites por deudor, venta real sin recurso, control de flujos, financiamiento confiable tras onboarding."
                en="Obligor-specific limits, true sale often non-recourse, cash-flow control, reliable funding post-onboarding."
              />
            </p>
            <ul className="space-y-2 text-base text-gray-700">
              <li>✓ Análisis por deudor</li>
              <li>✓ </li>
              <li>✓ </li>
              <li>✓ </li>
              <li>✓ </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Calculator Component
function Calculator() {
  const [invoice, setInvoice] = useState(500000);
  const [days, setDays] = useState(45);
  const [advance, setAdvance] = useState(0.8);
  const [spread, setSpread] = useState(0.11);

  const advanceAmt = Math.round(invoice * advance);
  const dailyRate = spread / 360;
  const cost = Math.round(advanceAmt * days * dailyRate);
  const netAmt = Math.max(advanceAmt - cost, 0);

  const fmt = (n) => '$' + Number(n || 0).toLocaleString('en-US');

  return (
    <section id="costs" className="py-32 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              <T es="Costos & Calculadora" en="Costs & Calculator" />
            </h2>
            <ul className="space-y-3 text-gray-600 text-xl">
              <li className="flex items-start gap-2 text-xl">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <T es="Comisión: 0.8% – 1.5% por factura financiada" en="Commission: 0.8% – 1.5% per financed invoice" />
              </li>
              <li className="flex items-start gap-2 text-xl">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <T es="Tasa: TIIE + 9% – 13% anual (costo diario)" en="Rate: TIIE + 9% – 13% p.a. (daily cost)" />
              </li>
              <li className="flex items-start gap-2 text-xl">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <T es="Sin comisión de apertura ni de línea — pagas lo que usas" en="No opening or line fees — you pay for what you use" />
              </li>
            </ul>
            <a href="#apply" className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <T es="Solicita tu línea" en="Apply now" />
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900"><T es="Calculadora" en="Calculator"/></h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <label>
                <span className="text-gray-700 font-medium block mb-2"><T es="Monto de la factura (MXN)" en="Invoice amount (MXN)"/></span>
                <input 
                  type="number" 
                  min="100000" 
                  step="50000" 
                  value={invoice}
                  onChange={(e) => setInvoice(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
              </label>
              
              <label>
                <span className="text-gray-700 font-medium block mb-2"><T es="Días hasta el pago: " en="Days to payment: "/>{days}</span>
                <input 
                  type="range" 
                  min="15" 
                  max="120" 
                  step="5" 
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </label>
              
              <label>
                <span className="text-gray-700 font-medium block mb-2"><T es="Anticipo:" en="Advance:"/> {(advance * 100).toFixed(0)}%</span>
                <input 
                  type="range" 
                  min="0.6" 
                  max="0.9" 
                  step="0.05" 
                  value={advance}
                  onChange={(e) => setAdvance(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </label>
              
              <label>
                <span className="text-gray-700 font-medium block mb-2"><T es="Tasa diferencial:" en="Spread: "/> {(spread * 100).toFixed(1)}%</span>
                <input 
                  type="range" 
                  min="0.09" 
                  max="0.13" 
                  step="0.005" 
                  value={spread}
                  onChange={(e) => setSpread(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </label>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 space-y-4">
              <h4 className="font-semibold text-gray-900 text-lg mb-3"><T es="Resultados" en="Results"/></h4>
              <div className="flex justify-between text-lg">
                <span className="text-gray-700"><T es="Anticipo bruto:" en="Gross advance:"/></span>
                <strong className="text-gray-900">{fmt(advanceAmt)}</strong>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-700"><T es="Costo estimado:" en="Estimated cost:"/></span>
                <strong className="text-gray-900">{fmt(cost)}</strong>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-700"><T es="Desembolso neto:" en="Net disbursement"/></span>
                <strong className="text-gray-900">{fmt(netAmt)}</strong>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gray-700"><T es="Estructura" en="Structure"/></span>
                <strong className="text-gray-900"><T es="Cesión verdadera (fuera del balance)" en="True sale (off balance sheet)"/></strong>
              </div>
              <p className="text-base text-gray-600 pt-3 border-t border-blue-200 text-justify">
               <T es="Estimación no vinculante; sujeta a límites, documentación y seguro. IVA: En las estructuras de cesión verdadera, el IVA normalmente se devenga al momento del pago por parte del comprador. Por favor, consulte con su asesor fiscal.*" en="Non‑binding estimate; depends on limits, documentation and insurance. VAT: in true‑sale structures, VAT commonly accrues upon buyer payment; please consult your tax advisor.*"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Apply Section
function Apply() {
  useScrollAnimation();
  const t = useTranslate();

  
  return (
    <section id="apply" className="py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              <T es="Solicita" en="Apply" />
            </h2>
            <ol className="space-y-4 text-gray-600 text-xl list-decimal pl-6">
              <li><T es="Envíanos tu CIEC → cotización indicativa en 72h" en="Send us your CIEC → indicative quote in 72h" /></li>
              <li><T es="Onboarding digital y validación de deudores" en="Digital onboarding and obligor validation" /></li>
              <li><T es="Aprobación de comité y firma digital" en="Credit committee approval & digital signing" /></li>
              <li><T es="Cuentas STP y notificación a deudores → listo para fondear" en="STP accounts and obligor notices → ready to fund" /></li>
            </ol>
            <p className="text-base text-gray-500 mt-6">
              <T 
                es="Estructura de venta verdadera sin recurso (donde aplique) con cuentas de control por deudor e instrucciones notariales."
                en="True‑sale, non‑recourse structure (where applicable) with per‑obligor control accounts and notary instructions."
              />
            </p>
          </div>
          
          <form className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 grid gap-5 fade-in-right text-lg">
            <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300" placeholder={t('Nombre completo', 'Full name')} />
            <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300" placeholder={t('Empresa', 'Company')} />
            <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300" placeholder="Email" type="email" />
            <input className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300" placeholder={t('Teléfono', 'Phone')} />
            <textarea className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300" placeholder={t('Necesidad (breve)', 'Need (brief)')} rows="4"></textarea>
            <button type="button" className="px-6 py-4 bg-gradient-to-r from-[#2B6CB0] to-[#3182CE] text-white rounded-2xl font-medium text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
              <T es="Solicitar contacto" en="Request contact" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  useScrollAnimation();
  
  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            <T es="Preguntas frecuentes" en="FAQ" />
          </h2>
        </div>
        <div className="grid gap-6 text-lg">
          {[
            {
              q: <T es="¿Esto es deuda?" en="Is this debt?"/>,
              a: <T es="No. Venta verdadera de cuentas por cobrar; fuera del balance; se liquida automáticamente cuando el comprador realiza el pago." en="No. True sale of receivables; off balance sheet; self-liquidates when the buyer pays."/>,
              icon: FileX,
              gradient: 'from-emerald-500 to-emerald-600'
            },
            {
              q: <T es="¿Cuándo pago el IVA?" en="When is VAT due?"/>,
              a: <T es="En estructuras de venta verdadera, el IVA normalmente se devenga cuando el comprador realiza el pago (confírmalo con tu asesor fiscal)." en="In true-sale structures, VAT typically accrues upon buyer payment (confirm with your tax advisor)."/>,
              icon: CalendarCheck,
              gradient: 'from-blue-500 to-blue-600'
            },
            {
              q: <T es="¿Siempre sin recurso?" en="Always non‑recourse?"/>,
              a: <T es="El enfoque es sin recurso sobre compradores aprobados; pueden aplicarse exclusiones (por ejemplo, en caso de disputas). Se prefieren las cuentas por cobrar aseguradas cuando sea aplicable." en="Focus is non‑recourse on approved buyers; exclusions may apply (e.g., disputes). Insured receivables preferred when applicable."/>,
              icon: ShieldAlert,
              gradient: 'from-purple-500 to-purple-600'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-start gap-6">
                <div className={` w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Footer
function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-[#0B1D3A] to-[#081627]">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img 
              src="images/kettera_logo.png" 
              alt="Kettera" 
              className="h-20 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-base"><T es="Financiamiento de cuentas por cobrar y soluciones de cadena de suministro." en="Receivables finance and supply‑chain solutions."/></p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 text-2xl"><T es="Sitio" en="Site"/></h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#products" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Productos" en="Products"/></a></li>
              <li><a href="#how" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Cómo funciona" en="How it works"/></a></li>
              <li><a href="#trust" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Confianza" en="Trust"/></a></li>
              <li><a href="#costs" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Costs" en="Costos"/></a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Preguntas frecuentes" en="FAQ"/></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 text-2xl">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Privacidad" en="Privacy"/></a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Términos" en="Terms"/></a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300 text-lg"><T es="Prevención del lavado de dinero" en="AML/PLD"/></a></li>
            </ul>
          </div>
          
          <div className="text-base flex items-end text-gray-400">
            © {year} <T es="Grupo Kettera. Todos los derechos reservados." en="Kettera Group. All rights reserved."/>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <MetricsBar />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Problem />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Approach />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <HowItWorks />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Products />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <WhoWeServe />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Trust />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Comparison />
            <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Calculator />
                  <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Apply />
                  <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <FAQ />
                  <div className="w-full flex justify-center my-20">
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#2B6CB0]/0 via-[#2B6CB0]/30 to-[#3182CE]/0 rounded-full opacity-0 animate-fadein-scale" />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;