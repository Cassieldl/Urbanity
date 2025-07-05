import logotipo from '../../assets/images/logos/logotipo.png';
import useHeaderCollapse from '../../hooks/useHeaderCollapse';
import { Link } from 'react-router-dom';

export default function Header() {

    useHeaderCollapse();

    return (
        <header className="tw-max-w-lg:tw-px-4 tw-max-w-lg:tw-mr-auto tw-absolute tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-bg-opacity-0 tw-px-[5%] lg:tw-justify-around tw-mt-3">
            <a className="tw-h-[40px] tw-w-[40px]" href="">
                <img src={logotipo} alt="logo" className="tw-object tw-h-full tw-w-full" />
            </a>
            <div className="collapsible-header animated-collapse max-lg:tw-shadow-md" id="collapsed-header-items">
                <div className="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center">
                    <a className="header-links tw-font-medium" href="#hero-section"> Sobre nós </a>
                    <a className="header-links tw-font-medium" href="#benefits"> Benefícios </a>
                    <a className="header-links tw-font-medium" href="#resources"> Recursos </a>
                    <a className="header-links tw-font-medium" href="#pricing"> Planos </a>
                    <a className="header-links tw-font-medium" href="#faq"> Dúvidas </a>
                </div>
                <div className="tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center">
                    <Link to="/signup" aria-label="signup" className="tw-rounded-full tw-px-3 tw-py-2 tw-text-white tw-border-[1px] tw-duration-[0.3s] tw-font-medium tw-transition-colors hover:!tw-bg-white hover:!tw-text-black">
                        <span>Sign Up</span>
                        <i className="bi bi-person-circle tw-ml-1"></i>
                    </Link>
                </div>
            </div>
            <button className="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-white lg:tw-hidden" onClick="toggleHeader()" aria-label="menu" id="collapse-btn"></button>
        </header>
    );
}