import { createContext, useContext, useState, type ReactNode } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

// Định nghĩa kiểu dữ liệu cho Context
type ToastContextType = {
  showToast: (message: string, variant: "success" | "danger") => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState({ show: false, message: '', variant: 'success' as 'success' | 'danger' });

  const showToast = (message: string, variant: "success" | "danger") => {
    setToast({ show: true, message, variant });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Đưa ToastContainer vào đây để nó luôn sẵn sàng hiển thị */}
      <ToastContainer position="bottom-start" className="p-3" style={{ zIndex: 9999 }}>
        <Toast 
          onClose={() => setToast({ ...toast, show: false })} 
          show={toast.show} 
          delay={3000} 
          autohide 
          bg={toast.variant}
        >
          <Toast.Body className="text-white fs-6">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
};

// Hook để các component con gọi dùng
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};