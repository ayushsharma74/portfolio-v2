
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLinks } from "@/lib/constants";

import * as motion from "motion/react-client"
export default function Contact() {
  const transition = {
    duration: 0.2,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <motion.main initial={{ filter: "blur(15px)", y:20, opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1, y:0 }} transition={transition}>
      <h1 className="font-bold text-2xl">Get in touch</h1>
      <div className="flex flex-col gap-5">
        <h1>Interested in working with me? feel free to reach out.</h1>
        <div className="flex items-center gap-2">
          <CiMail size={20} />
          <Link
            href="mailto:ayushsharma.code@outlook.com"
            className="underline hover:no-underline"
          >
            ayushsharma.code@outlook.com
          </Link>
        </div>
        <div className="flex gap-3 mt-3">
          <Link
            href={SocialLinks.github}
            target="_blank"
            className="flex items-center"
          >
            <FaGithub size={27} className="hover:scale-125 transition-all" />
          </Link>
          <Link
            href={SocialLinks.linkedin}
            target="_blank"
            className="flex items-center"
          >
            <FaLinkedin size={27} className="hover:scale-125 transition-all" />
          </Link>
          <Link
            href={SocialLinks.instagram}
            target="_blank"
            className="flex items-center"
          >
            <FaInstagram size={27} className="hover:scale-125 transition-all" />
          </Link>
          <Link
            href={SocialLinks.x}
            target="_blank"
            className="flex items-center"
          >
            <FaXTwitter size={27} className="hover:scale-125 transition-all" />
          </Link>
          <Link
            href={SocialLinks.discord}
            target="_blank"
            className="flex items-center"
          >
            <FaDiscord size={27} className="hover:scale-125 transition-all" />
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
