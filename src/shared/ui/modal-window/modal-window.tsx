'use client';
import React, { ReactNode, useCallback, useEffect } from "react";
import s from "./modal-window.module.css";
import { classNames, Mods } from "@/src/shared/lib/classNames/classNames";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  closingModal: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    closingModal
  } = props;

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closingModal();
    }
  }, [closingModal]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [s.opened]: isOpen,
  };

  return (
      <div className={classNames(s.Modal, mods, [className])}>
        <div className={s.overlay} onClick={() => closingModal()}>
          <div
            className={s.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
  );
};