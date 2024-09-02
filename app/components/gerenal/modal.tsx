'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";

export default function Modals({ title, children, size, btnColor, isIcon, text }: any) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      {isIcon ? (<Tooltip className='' content={text} color={btnColor || "primary"} offset={-7}>
                    <Button isIconOnly color={btnColor || "primary"} aria-label="Like" onPress={onOpen}>
                      {title}
                    </Button>
                </Tooltip>):
                <Button className={`${btnColor || "bg-primary"} text-white font-bold hover:text-white`} onPress={onOpen}>{title}</Button>
        }
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior='inside'
        size={size || '2xl'}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40 ",
          base: "border-[#292f46] bg-gray-200 dark:bg-[#19172c] text-primary",
          header: "border-b-[1px] border-primary",
          footer: "border-t-[1px] border-primary",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Preview
              </ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
