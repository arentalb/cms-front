export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 w-2/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Text</h2>
          <button onClick={onClose} className="text-red-600">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
