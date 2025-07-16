import useGaspAnimations from './hooks/useGaspAnimations'
import FaqAccordion from './hooks/FaqAccordion'
import setrem from './assets/images/logos/setrem.svg'
import dash from './assets/images/home/dash.png'
import dashboard from './assets/images/home/dashboard.png'
import insights from './assets/images/home/insights.png'
import alan from './assets/images/icons/alan.png'
import botas from './assets/images/icons/botas.jpeg'
import lula from './assets/images/icons/lula.webp'
import maicon from './assets/images/icons/maicon.jpeg'
import relampago from './assets/images/icons/relampago.jpg'
import ronaldo from './assets/images/icons/ronaldo.jpeg'
import Header from './Pages/landing/Header'
import Footer from './Pages/landing/Footer'


function Home() {

  useGaspAnimations();
  
  return (

    <>
      <Header />

      <section className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-black tw-text-white" >
        <section className="hero-section tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-md:tw-mt-[50px]" id="hero-section">
          <div className="tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4">
            <div className="tw-flex tw-flex-col tw-place-content-center tw-items-center">
              <div className="reveal-up gradient-text tw-text-center tw-text-6xl tw-font-semibold tw-uppercase tw-leading-[80px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                <span className="">A inovação</span>
                <br />
                <span className=""> surge da necessidade </span>
              </div>
              <div className="reveal-up tw-mt-10 tw-max-w-[450px] tw-p-2 tw-text-center tw-text-gray-300 max-lg:tw-max-w-full tw-font-medium">
                A <strong>Urbanity</strong> é uma empresa brasileira que desenvolve soluções digitais para o cotidiano urbano, focando em facilitar a vida das pessoas por meio de tecnologias inovadoras. 
              </div>

              <div className="reveal-up tw-mt-10 tw-flex tw-place-items-center tw-gap-4">
                <a className="btn tw-bg-purple-800 hover:!tw-bg-purple-700 tw-shadow-lg tw-shadow-primary tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                  <i className="bi bi-play-circle-fill"></i>
                  <span className='tw-font-medium tw-ml-1'>Ver mais</span>
                </a>
              </div>
            </div>

            <div className="reveal-up tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center" id="dashboard-container">
              <div className="tw-relative tw-max-w-[80%] tw-overflow-hidden tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full" id="dashboard">
                <img src={dashboard} alt="dashboard" className="tw-h-full tw-w-full tw-object-cover tw-opacity-90 max-lg:tw-object-contain" />
              </div>

              <div className="hero-img-bg-grad tw-absolute tw-left-[20%] tw-top-5 tw-h-[200px] tw-w-[200px]"></div>
            </div>
          </div>
        </section>

        <section className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-1">
          <h2 className="reveal-up tw-text-4xl tw-font-semibold max-md:tw-text-xl">
            Nossos parceiros
          </h2>

          <div className="reveal-up carousel-container">
            <div className="carousel lg:w-place-content-center tw-mt-1 tw-flex tw-w-full">
              <div className="carousel-img tw-h-[300px] tw-w-[550px]">
                <img src={setrem} alt="Setrem" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" srcset="" />
              </div>
              <div className="carousel-img tw-h-[300px] tw-w-[550px]">
                <img src={setrem} alt="Setrem" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" srcset="" />
              </div>
              <div className="carousel-img tw-h-[300px] tw-w-[550px]">
                <img src={setrem} alt="Setrem" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" srcset="" />
              </div> 
            </div>
          </div>
        </section>

        <section className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6" id="benefits">
          <div className="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5">
            <div className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center">
              <h2 className="tw-text-4xl tw-font-medium tw-text-gray-200 max-md:tw-text-3xl">
                Nossos benefícios
              </h2>
            </div>
            <div className="tw-mt-6 tw-flex tw-max-w-[80%] tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
              <div className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]">
                <div className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-h-[150px]">
                  <div className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2">
                    <i className="bi bi-phone tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"></i>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                  <h3 className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl">
                    Inclusão no Cotidiano
                  </h3>
                  <div className="tw-text-gray-300">
                    Facilitamos a rotina urbana com soluções tecnológicas acessíveis, otimizando tempo e conectando serviços essenciais.
                  </div>
                </div>
              </div>
              <div className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]">
                <div className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-text-[150px]">
                  <div className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2">
                    <i className="bi bi-layout-sidebar-inset tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"></i>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                  <h3 className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl">
                    Experiência Intuitiva
                  </h3>
                  <div className="tw-text-gray-300">
                    Nossos produtos são pensados para serem simples, rápidos e agradáveis de usar, para todos os perfis de usuários.
                  </div>
                </div>
              </div>
              <div className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]">
                <div className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-h-[150px]">
                  <div className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2">
                    <i className="bi bi-geo-alt-fill tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"></i>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                  <h3 className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl">
                    Conexão entre pessoas e lugares
                  </h3>
                  <div className="tw-text-gray-300">
                    Criamos plataformas como o Chegaí que aproximam pessoas de eventos, espaços e oportunidades na cidade.
                  </div>
                </div>
              </div>
              <div className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]">
                <div className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-h-[150px]">
                  <div className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2">
                    <i className="bi bi-shield-lock-fill tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"></i>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                  <h3 className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl">
                    Segurança e confiança
                  </h3>
                  <div className="tw-text-gray-300">
                    Tecnologias atualizadas, processos verificados e políticas de privacidade claras, confiança total para usar nossos serviços.
                  </div>
                </div>
              </div>
              <div className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]">
                <div className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-h-[150px]">
                  <div className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2">
                    <i className="bi bi-buildings-fill tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"></i>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                  <h3 className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl">
                    Inovação com propósito
                  </h3>
                  <div className="tw-text-gray-300">
                    Todas as soluções Urbanity são pensadas para ter impacto real: promover inclusão, sustentabilidade e agilidade no ambiente urbano.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6" id="resources">
          <div className="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5">
            <div className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center">
              <h2 className="tw-text-4xl tw-font-medium tw-text-gray-200 max-md:tw-text-2xl">
                Principais recursos
              </h2>
            </div>
            <div className="tw-mt-6 tw-flex tw-max-w-[80%] tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
              <div className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]">
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-globe"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Integração
                  </h3>
                  <p className="tw-text-gray-300 max-md:tw-text-sm">
                    Sistema integrado com outras plataformas e serviços para facilitar o acesso e a troca de informações.
                  </p>
                </div>
              </div>

              <div className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]">
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-pie-chart-fill"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Relatórios
                  </h3>
                  <p className="tw-text-gray-300 max-md:tw-text-sm">
                    Levantamento de dados e informações em tempo real, com relatórios detalhados e gráficos.
                  </p>
                </div>
              </div>

              <div className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]">
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-cloud-fill"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Cloud backup
                  </h3>
                  <p className="tw-text-gray-300 max-md:tw-text-sm">
                    Backup de dados em nuvem, com acesso rápido e fácil, para garantir a segurança e integridade dos dados.
                  </p>
                </div>
              </div>

              <div className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]">
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-fingerprint"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Fatores de segurança
                  </h3>
                  <p className="tw-text-gray-300 max-md:tw-text-sm">
                    Utilizamos de estratégias de autenticação para garantir a segurança dos dados e informações.
                  </p>
                </div>
              </div>

              <div className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]">
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-sliders"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Personalização
                  </h3>
                  <p className="tw-text-gray-300 max-md:tw-text-sm">
                    Defina as configurações de acordo com suas necessidades e preferências, com opções de personalização e customização.
                  </p>
                </div>
              </div>

              <div className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]">
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className="bi bi-gear-fill"></i>
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">
                    Sistema
                  </h3>
                  <p className="tw-text-sm tw-text-gray-300">
                    Atualizações constantes e melhorias contínuas, com suporte técnico e atendimento ao cliente, com equipe especializada e treinada para atender suas necessidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6">
          <div className="reveal-up tw-flex tw-min-h-[60vh] tw-place-content-center tw-place-items-center tw-gap-[10%] max-lg:tw-flex-col max-lg:tw-gap-10">
            <div className="tw-flex">
              <div className="tw-max-h-[650px] tw-max-w-[850px] tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
                <img src={dash} alt="coding" className="tw-h-full tw-w-full tw-object-cover" />
              </div>
            </div>
            <div className="tw-mt-6 tw-flex tw-max-w-[450px] tw-flex-col tw-gap-3">
              <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">
                Feito para o Dia a Dia
              </h3>

              <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                <h4 className="tw-text-xl tw-font-medium">
                  <i className="bi bi-globe-americas !tw-text-2xl !tw-mr-4"></i>
                    Navegação Inteligente
                </h4>
                <span className="tw-text-lg tw-text-gray-300 max-md:tw-text-base">
                  Tenha acesso rápido às principais funções com um design pensado para o seu cotidiano. Tudo no lugar certo, sem complicações.
                </span>
              </div>
              <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                <h4 className="tw-text-xl tw-font-medium">
                  <i className="bi bi-brush !tw-text-2xl !tw-mr-4"></i>
                  Personalização Urbana
                </h4>
                <span className="tw-text-lg tw-text-gray-300 max-md:tw-text-base">
                  Adapte a experiência à sua rotina na cidade: eventos, serviços e sugestões locais, do seu jeito.
                </span>
              </div>
              <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                <h4 className="tw-text-xl tw-font-medium">
                  <i className="bi bi-lock !tw-text-2xl !tw-mr-4"></i>
                  Integridade de informações
                </h4>
                <span className="tw-text-lg tw-text-gray-300 max-md:tw-text-base">
                  Seus dados e preferências protegidos com criptografia e autenticação moderna, garantindo confiança em cada uso.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6">
          <div className="reveal-up tw-flex tw-min-h-[60vh] tw-place-content-center tw-place-items-center tw-gap-[10%] max-lg:tw-flex-col max-lg:tw-gap-10">
            <div className="tw-mt-6 tw-flex tw-max-w-[450px] tw-flex-col tw-gap-4">
              <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">
                Insights em Tempo Real
              </h3>

              <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                <h4 className="tw-text-xl tw-font-medium">
                  <i className="bi bi-layers !tw-text-2xl !tw-mr-4"></i>
                  Tudo em um só lugar
                </h4>
                <span className="tw-text-lg tw-text-gray-300 max-md:tw-text-base">
                  Acompanhe seus dados, operações e interações em um painel claro e otimizado. Informações que fazem sentido para o seu uso.
                </span>
              </div>
              <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                <h4 className="tw-text-xl tw-font-medium">
                  <i className="bi bi-puzzle !tw-text-2xl !tw-mr-4"></i>
                  Decisões mais inteligentes
                </h4>
                <span className="tw-text-lg tw-text-gray-300 max-md:tw-text-base">
                  Visualizações dinâmicas ajudam você a entender o que está acontecendo, quando e por que, direto ao ponto.
                </span>
              </div>
              <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                <h4 className="tw-text-xl tw-font-medium">
                  <i className="bi bi-binoculars !tw-text-2xl !tw-mr-4"></i>
                  Monitoramento contínuo
                </h4>
                <span className="tw-text-lg tw-text-gray-300 max-md:tw-text-base">
                  Tenha uma visão completa da sua operação 24/7. A Urbanity te mantém atualizado com alertas e atualizações automáticas.
                </span>
              </div>
            </div>

            <div className="tw-flex">
              <div className="tw-max-h-[650px] tw-max-w-[850px] tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
                <img src={insights} alt="coding" className="tw-h-full tw-w-full tw-object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-up tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-p-[2%]" id="pricing">
          <h3 className="tw-text-3xl tw-font-medium max-md:tw-text-2xl">
            Confira nossos planos
          </h3>

          <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
            <div className="tw-flex tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-bg-secondary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px] tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
              <h3 className="tw-text-center">
                <h1 className="tw-text-4xl tw-text-center tw-font-semibold">Plano Interior</h1>

                <br />

                <span className="tw-text-5xl tw-font-semibold">R$45</span>
                <span className="tw-text-2xl tw-text-gray-400">/mês</span>
              </h3>
              <p className="tw-mt-3 tw-text-center tw-text-gray-400">
                Plano base para quem está curioso em desbravar a tecnologia no cotiniano.
              </p>

              <br />

              <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200">
                <li>Acesso ao Chegaí com funcionalidades básicas.</li>
                <li>Atualizações semanais com novidades urbanas.</li>
                <li>Participação em campanhas de sustentabilidade urbana.</li>
                <li>Suporte via e-mail com tempo de resposta padrão.</li>
              </ul>
              <a href="#" className="btn tw-bg-purple-800 hover:!tw-bg-purple-700 tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] tw-font-medium hover:tw-scale-x-[1.02]">
                Assinar
              </a>
            </div>
            <div className="tw-flex tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-bg-secondary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px] tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
              <h3 className="tw-text-center">
                <h1 className="tw-text-4xl tw-text-center tw-font-semibold">Plano Urbano</h1>

                <br />

                <span className="tw-text-5xl tw-font-semibold">R$120</span>
                <span className="tw-text-2xl tw-text-gray-400">/mês</span>
              </h3>
              <p className="tw-mt-3 tw-text-center tw-text-gray-400">
                Plano plus que oferece equilíbrio nos recursos, funcionalidades e preço.
              </p>

              <br />

              <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200">
                <li>Todos os recursos oferecidos no plano Essencial</li>
                <li>Acesso a promoções exclusivas em apps parceiros.</li>
                <li>Alertas em tempo real sobre eventos, trânsito e mobilidade.</li>
                <li>Suporte via chat com prioridade intermediária.</li>
              </ul>
              <a href="#" className="btn tw-bg-purple-800 hover:!tw-bg-purple-700 tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] tw-font-medium hover:tw-scale-x-[1.02]">
                Assinar
              </a>
            </div>
            <div className="tw-flex tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-bg-secondary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px] tw-shadow-[rgba(170,49,233,0.44021358543417366)]">
              <h3 className="tw-text-center">
                <h1 className="tw-text-4xl tw-text-center tw-font-semibold">Plano Metrópole</h1>

                <br />

                <span className="tw-text-5xl tw-font-semibold">R$260</span>
                <span className="tw-text-2xl tw-text-gray-400">/mês</span>
              </h3>
              <p className="tw-mt-3 tw-text-center tw-text-gray-400">
                Plano avançado para quem deseja tudo o que a Urbanity têm a oferecer.
              </p>

              <br />

              <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200">
                <li>Todos os recursos dos planos anteriores.</li>
                <li>Convites para eventos exclusivos da Urbanity.</li>
                <li>Integração com apps de transporte, delivery e entretenimento.</li>
                <li>Suporte premium com atendimento 24h.</li>
              </ul>
              <a href="#" className="btn tw-bg-purple-800 hover:!tw-bg-purple-700 tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] tw-font-medium hover:tw-scale-x-[1.02]">
                Assinar
              </a>
            </div>
          </div>
        </section>

        <section className="reveal-up tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]">
          <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl" id="faq">
            FAQ
          </h3>
          <div className="tw-mt-5 tw-flex tw-min-h-[300px] tw-w-full tw-max-w-[850px] tw-flex-col tw-gap-4">
            <FaqAccordion />
            <div className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]">

              <div className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
                <span>O que é a Urbanity?</span>
                <i className="bi bi-chevron-down tw-ml-auto"></i>
              </div>

              <div className="content tw-font-medium !tw-text-gray-300">
                A Urbanity é uma empresa brasileira que desenvolve soluções digitais para o cotidiano urbano, focando em facilitar a vida das pessoas por meio de tecnologias inovadoras, como o aplicativo <a href="https://chegaiapp.web.app" target="_blank" className="tw-font-medium tw-text-yellow-300">Chegaí</a>.
              </div>

            </div>

            <div className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]">

              <div className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
                <span>Quais serviços a Urbanity oferece?</span>
                <i className="bi bi-chevron-down tw-ml-auto"></i>
              </div>

              <div className="content tw-font-medium !tw-text-gray-300">
                A Urbanity cria plataformas digitais que conectam pessoas a serviços urbanos, como eventos, entretenimento, mobilidade e outros aspectos do dia a dia, promovendo praticidade e inclusão.
              </div>

            </div>

            <div className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]">

              <div className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">

                <span>Quais são os valores da Urbanity como empresa?</span>
                <i className="bi bi-chevron-down tw-ml-auto"></i>

              </div>

              <div className="content tw-font-medium !tw-text-gray-300">
                A Urbanity valoriza a inovação, a inclusão digital, a sustentabilidade e o compromisso com a melhoria da qualidade de vida nas cidades por meio de soluções tecnológicas.
              </div>

            </div>

            <div className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]">

              <div className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
                <span>Como posso me tornar parceiro da Urbanity?</span>
                <i className="bi bi-chevron-down tw-ml-auto tw-font-semibold"></i>
              </div>

              <div className="content tw-font-medium !tw-text-gray-300">
                Para se tornar parceiro da Urbanity, você pode entrar em contato diretamente pelo site ou pelos canais oficiais da empresa, apresentando sua proposta de colaboração. A Urbanity está aberta a parcerias que promovam inovação e melhorem a experiência dos usuários no ambiente urbano.
              </div>

            </div>

          </div>

          <div className="reveal-up tw-mt-20 tw-flex tw-flex-col tw-place-items-center tw-gap-4">

            <div className="tw-text-2xl max-md:tw-text-2xl tw-font-medium">
              Em caso de dúvidas, entre em contato conosco!
            </div>

            <a href="#" className="btn tw-bg-purple-800 hover:!tw-bg-purple-700 tw-text-1xl !tw-rounded-full tw-font-medium tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]">
              <span>Contato <i className="bi bi-telephone-fill tw-ml-1"></i></span>
            </a>

          </div>

        </section>

        <section className="reveal-up tw-mt-5 tw-flex tw-min-h-[80vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]">

          <h3 className="tw-text-4xl tw-font-medium tw-text-gray-200 max-md:tw-text-2xl">
            Os melhores estão conosco!
          </h3>

          <div className="tw-mt-8 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3">

            <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]">
              <p className="tw-mt-4 tw-text-gray-300">
                Mí amigos... quando se vive una vida llena de aventuras, espadas, e olhares mortales... é difícil lembrar de tudo, sí? Mas agora, com este SaaS magnífico — El Planificador Supremo — eu organizo meus duelos, meus encontros, e até... minhas sonecas felinas. É como ter um escudeiro dentro do bolsillo, comprendes?
              </p>

              <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                  <img src={botas} className="tw-h-full tw-w-full tw-object-cover" alt="women" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-font-semibold">Gato de Botas</div>
                  <div className="tw-text-gray-400">espadachim e amante</div>
                </div>
              </div>
            </div>

            <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]">
              <p className="tw-mt-4 tw-text-gray-300">
                Hi Brazil! É o Micha... hihi! Eu sempre fui perfeccionista, oh right? Então conheci esse serviço incrível que me ajuda com tudo: agenda, música, turnê, figurino... é tipo ter o Biridin e o Rusbé trabalhando num app só!" UOL! Recomendo muito. Porque o show tem que continuar, shamone!
              </p>

              <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                  <img src={maicon} className="tw-h-full tw-w-full tw-object-cover" alt="man" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-font-semibold">Maicon Jeckson</div>
                  <div className="tw-text-gray-400">rei do pop all right </div>
                </div>
              </div>
            </div>

            <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]">
              <p className="tw-mt-4 tw-text-gray-300">
                Epá, tu achas que esse topete fica assim por acaso, irmão? Não dá, mano… tenho jogo, treino, publi, treino de novo, sessão de abdominal às 3 da manhã, como é que vou lembrar de marcar barbeiro?”
                Com esse app, ele já sabe quando o meu fade tá vencido. O app manda mensagem: "Cristiano, tá na hora do degradê." Pá, é como ter um técnico só pro teu cabelo!” E o mais fixe? Tem IA que escolhe barbeiro que não conversa muito, que é pra eu não ouvir "e o Messi?" toda vez. Gênio!
              </p>

              <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                  <img src={ronaldo} className="tw-h-full tw-w-full tw-object-cover" alt="man" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-font-semibold">Cristiano Ronaldo</div>
                  <div className="tw-text-gray-400">jogador e ícone do corte na régua</div>
                </div>
              </div>
            </div>

            <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]">
              <p className="tw-mt-4 tw-text-gray-300">
                KATCHIAU! Desdi qe eu comcei a usssar esde... esse... calma que tô digitando com a roda aqui... essseee app, minha vida ficou uma reta sem curva. Organiza minhas corridas, revisão, até lembra de passar na borracharia! Se você corre contra o tempo como eu, vai querer isso no seu painel."
              </p>

              <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                  <img src={relampago} className="tw-h-full tw-w-full tw-object-cover" alt="man" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-font-semibold">Relâmpago Marquinhos</div>
                  <div className="tw-text-gray-400">campeão da Copa Pistão</div>
                </div>
              </div>
            </div>

            <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]">
              <p className="tw-mt-4 tw-text-gray-300">
                Vou ser sincero: se eu puder resolver tudo sem sair de casa, melhor ainda. Esse app virou tipo meu assistente da vida — pago contas, agendo coisa, peço comida, marco até barbeiro em casa, tudo num lugar só. É como se o Jarvis tivesse virado meu brother.
              </p>

              <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                  <img src={alan} className="tw-h-full tw-w-full tw-object-cover" alt="man" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-font-semibold">Alanzoka</div>
                  <div className="tw-text-gray-400">streamer top one from Brazil</div>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]">
              <p className="tw-mt-4 tw-text-gray-300">
                Olha, minha gente… Eu já vi muita coisa nessa vida. Já vi trabalhador acordando cedo pra pegar o busão lotado, já vi o povo ralando pra botar comida na mesa… mas eu nunca vi um negócio tão útil quanto esse tal desse aplicativo. Se eu tivesse isso nos anos 80, eu organizava greve com um clique só! Então, se você tá aí meio perdido no dia a dia, meu conselho é simples: baixa o app, usa, e depois me agradece.
              </p>

              <div className="tw-flex tw-place-items-center tw-gap-3">
                <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                  <img src={lula} className="tw-h-full tw-w-full tw-object-cover" alt="man" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-1">
                  <div className="tw-font-semibold">Luiz Inácio Lula da Silva</div>
                  <div className="tw-text-gray-400">presidente do brasa</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      
      <Footer />
    </>
  )
}

export default Home