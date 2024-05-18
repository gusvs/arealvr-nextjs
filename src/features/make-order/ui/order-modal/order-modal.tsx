"use client";
import { Modal } from "@/src/shared/ui/modal-window/modal-window";
import { OrderForm } from "@/src/features/make-order/ui/order-form/order-form";
import { classNames } from "@/src/shared/lib/classNames/classNames";

interface OrderModalProps {
  className?: string;
  isOpen?: boolean;
  closingModal: (value: boolean) => void;
}

export const OrderModal = ({ className, closingModal }: OrderModalProps) => {
  return (
    <Modal
      className={classNames("", {}, [className])}
      isOpen
      closingModal={() => closingModal(false)}
    >
      <OrderForm closingModal={() => closingModal(false)} />
    </Modal>
  );
};