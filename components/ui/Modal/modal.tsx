"use client";

// import * as Dialog from "@radix-ui/react-dialog";
import type { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  // return (
  //   <Dialog.Root open onOpenChange={handleOnOpenChange}>
  //     <Dialog.Portal>
  //       <Dialog.Overlay className="fixed inset-0 bg-black/70" />

  //       <Dialog.DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  //         {children}
  //       </Dialog.DialogContent>
  //     </Dialog.Portal>
  //   </Dialog.Root>
  // );

  return (
    <AnimatePresence>
      {
        <Dialog
          static
          open={true}
          onClose={handleOnOpenChange} // initialFocus={overlayRef}
          className="fixed inset-0 z-10 flex items-center justify-center isolate"
        >
          <Dialog.Overlay // ref={overlayRef}
            as={motion.div}
            key="backdrop"
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          />
          <div className="fixed inset-0 w-screen overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center p-4">
              {children}
              <div className="absolute z-20 inset-0 mx-auto flex max-w-7xl items-center justify-center">
                <div className="relative aspect-[3/2] h-screen w-full">
                  <div className="absolute top-0 right-0 flex items-center gap-2 p-3 text-white">
                    <button
                      onClick={() => handleOnOpenChange(false)}
                      className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      }
    </AnimatePresence>
  );
};

export default Modal;
