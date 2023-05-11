"use client";

// HOOKS
import useRentModal from "@/app/hooks/useRentModal";

// MODAL
import Modal from "./Modal";

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Cavebnb your gaming home!"
      disabled={false}
    />
  );
};

export default RentModal;
