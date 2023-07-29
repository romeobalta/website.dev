import Image from 'next/image'

export function Socials() {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <a
        href="https://www.threads.net/@romeobalta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/threads.svg"
          alt="Threads"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/romeobalta/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://github.com/romeobalta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      </a>
    </div>
  )
}
