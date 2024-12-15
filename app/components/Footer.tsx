import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-[#051c2c] text-gray-400 text-center py-4">
            <div className="items-center">
                <p className="text-xxs xl:text-xs mb-2">
                    © 2024 chaechae. 모든 권리 보유. | 이 페이지는 내 개발 일지를 기록하는 테크로그입니다.
                </p>
                <div className="flex flex-row text-xs font-bold space-w-4 justify-center">
                        <a href="https://github.com/chaechae-04" className="flex text-gray-300 hover:text-white mx-1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-1" /> GitHub |
                        </a>
                        <a href="https://instagram.com/lee.young_s" className="flex text-gray-300 hover:text-white mx-1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 mr-1" /> Instagram |
                        </a>
                        <a href="mailto:leeys4903@naver.com" className="flex text-gray-300 hover:text-white mx-1">
                            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-1" /> Contact
                        </a>
                </div>
            </div>
        </footer>
    );
}