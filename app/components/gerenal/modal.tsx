'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";



export default function Modals({ title, children, size, btnColor, isIcon, text, icon }: any) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      {isIcon ? (<Tooltip className='' content={text} color={btnColor || "primary"} offset={1}>
                    <button  className={`text-${btnColor} font-bold hover:scale-110 `} aria-label="Like" onClick={onOpen}>
                      {icon}
                    </button>
                </Tooltip>):
                <Button className={`${btnColor || "bg-primary"} text-white font-bold hover:text-white`} onPress={onOpen}>{title}</Button>
        }
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior='inside'
        size={size || '2xl'}
        classNames={{
          body: "py-1",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40 ",
          base: "border-[#292f46] bg-white  text-slate-600",
          header: "border-b-[1px] border-slate-400 ",
          footer: "border-t-[1px] border-slate-400",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {title}
              </ModalHeader>
              <ModalBody>
                {children}
                <div className="w-full h-4"></div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger"  onPress={onClose}>
                  Close
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
