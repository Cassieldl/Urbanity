import React from "react";
import logo from "../../assets/images/logos/logo.png";

export default function Footer() {
  return (
    <footer className="tw-mt-auto tw-flex tw-w-full tw-place-content-around tw-gap-3 tw-p-[5%] tw-px-[10%] tw-text-white tw-bg-black max-md:tw-flex-col">
        <div className="tw-flex tw-h-full tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
           <a href=""><img src={logo} alt="logo" srcset="" className="tw-max-w-[240px]"/></a> 
            <div className="tw-text-neutral-500">
                <br /> Desde © 2025 Urbanity
                <br /> Todos os direitos reservados
            </div>
            <div className="tw-flex tw-gap-4 tw-text-2xl">
                
                <a href="#" aria-label="Linkedin">
                    <i className="bi bi-linkedin"></i>
                </a>

                <a href="#" aria-label="Twitter">
                    <i className="bi bi-twitter-x"></i>
                </a>
                
                <a href="#" className="tw-h-[40px] tw-w-[40px]" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                
            </div>
        </div>

        <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-3xl max-md:tw-text-xl tw-font-medium">Urbanity</h2>

            <div className="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
                <a href="#" className="footer-link">Sobre a Urbanity</a>
                <a href="#" className="footer-link">Comunidade</a>
                <a href="#" className="footer-link">Feedbacks</a>
                <a href="#" className="footer-link">Notícias</a>
                <a href="#" className="footer-link">Suporte</a>
            </div>
        </div>

        <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-3xl max-md:tw-text-xl tw-font-medium">Recursos</h2>

            <div className="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
                <a href="#" className="footer-link">Avisos legais</a>
                <a href="#" className="footer-link">Termos de uso</a>
                <a href="#" className="footer-link">Central de ajuda</a>
                <a href="#" className="footer-link">Perguntas frequentes</a>
                <a href="#" className="footer-link">Política de privacidade</a>
            </div>
        </div>
    </footer>
  );
}