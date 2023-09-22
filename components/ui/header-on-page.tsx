import Image from "next/image";
import { ImageProps } from "@/utils/types";
import { AnimatedText } from "./animated-text";
type Props = {
  children?: string | JSX.Element;
  title: string;
  subtitle: string;
  subtitle2?: string;
  image?: ImageProps;
};

export async function Header({
  title,
  subtitle,
  subtitle2,
  children,
  image,
}: Props) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-between ${
          children ? "md:px-24 md:pt-24 md:pb-10" : "md:p-24"
        } h-1/2`}
      >
        <div className="relative isolate px-6 pt-24 lg:px-8">
          {image && (
            <p className="text-xl py-2 text-center text-muted-foreground leading-10">
              <Image
                className="w-44 h-44 p-1 rounded-full border-2 border-gray-300 dark:border-gray-500 mx-auto object-cover object-center grayscale hover:grayscale-0 hover:drop-shadow-lg"
                src={image?.src}
                width={100}
                height={100}
                alt="Bordered avatar"
                placeholder="blur"
                sizes="100px"
                blurDataURL={image.blurDataURL}
              />
            </p>
          )}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight py-4 border-b mb-5 sm:text-6xl">
              {/* <AnimatedText text={title} once /> */}
              {title}
            </h1>
            <p className="text-xl py-2 text-muted-foreground leading-10">
              {subtitle}
              {/* <AnimatedText
                once
                text={subtitle}
                animation={{
                  hidden: {
                    opacity: 0,
                    // y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              /> */}
            </p>
            {subtitle2 && (
              <p className="text-xl py-2 text-muted-foreground leading-10">
                {subtitle2}
                {/* <AnimatedText
                  once
                  text={subtitle2}
                  animation={{
                    hidden: {
                      opacity: 0,
                      // y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                /> */}
              </p>
            )}
          </div>
        </div>
      </div>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mt-10 animate-bounce opacity-70 text-center mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
        />
      </svg>
    </>
  );
}
