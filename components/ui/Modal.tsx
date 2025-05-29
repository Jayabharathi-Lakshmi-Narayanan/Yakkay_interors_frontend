// components/ui/Modal.tsx
"use client";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full relative overflow-y-auto"
        style={{ maxHeight: "80vh" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
