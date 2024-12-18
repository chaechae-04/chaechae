import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-[#051c2c] text-gray-400 text-center py-4">
            <div className="items-center">
                <div className="flex flex-row text-xs font-bold space-w-4 justify-center">
                    <Link href="https://github.com/chaechae-04" className="flex text-gray-300 hover:text-white mx-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-1" /> GitHub |
                    </Link>
                    <Link href="https://instagram.com/lee.young_s" className="flex text-gray-300 hover:text-white mx-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 mr-1" /> Instagram |
                    </Link>
                    <Link href="mailto:leeys4903@naver.com" className="flex text-gray-300 hover:text-white mx-1">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-1" /> Email
                    </Link>
                </div>
                <p className="text-xxs xl:text-xs m-2 mb-0">
                    © 2024 chaechae-04 | 이 페이지는 내 개발 일지를 기록하는 테크로그입니다.
                </p>
            </div>
        </footer>
    );
}