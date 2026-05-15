import { useState, useRef } from 'react';
import { X, Upload, FileText } from 'lucide-react';
import { toast } from 'sonner';

const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwZhjGLuSSkpIfLmZHACCNOvgrJDm0asy8TAuo34XeoWBFB4G2HgugdKmJxuiwk-ao0/exec';

type Props = { open: boolean; onClose: () => void };

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}

export function RecruitmentModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCvFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) setCvFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      let cvBase64 = '';
      let cvName = '';
      if (cvFile) {
        cvBase64 = await fileToBase64(cvFile);
        cvName = cvFile.name;
      }
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          type: 'recruitment',
          ...form,
          cvName,
          cvBase64,
          userAgent: navigator.userAgent,
        }),
      });
      toast.success('Hồ sơ đã được gửi! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.');
      setForm({ name: '', phone: '', email: '' });
      setCvFile(null);
      onClose();
    } catch {
      toast.error('Gửi không thành công, vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 bg-white rounded-sm w-full max-w-lg shadow-2xl overflow-hidden">
        <div className="bg-[#13304A] px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="font-headline text-white" style={{ fontSize: '22px', fontWeight: 800 }}>
              Ứng tuyển tại <span className="text-[#D4A24C]">102 Creative</span>
            </h2>
            <p className="text-white/60 mt-1" style={{ fontSize: '14px' }}>
              Điền thông tin và đính kèm CV của bạn
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
          <div>
            <label className="block text-[#0A2540] mb-1.5" style={{ fontSize: '14px', fontWeight: 600 }}>
              Họ và tên *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#E5E7EB] rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors"
              style={{ fontSize: '15px' }}
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block text-[#0A2540] mb-1.5" style={{ fontSize: '14px', fontWeight: 600 }}>
              Số điện thoại *
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#E5E7EB] rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors"
              style={{ fontSize: '15px' }}
              placeholder="0888 40 32 32"
            />
          </div>

          <div>
            <label className="block text-[#0A2540] mb-1.5" style={{ fontSize: '14px', fontWeight: 600 }}>
              Email *
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 border border-[#E5E7EB] rounded-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D4A24C] transition-colors"
              style={{ fontSize: '15px' }}
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-[#0A2540] mb-1.5" style={{ fontSize: '14px', fontWeight: 600 }}>
              CV / Hồ sơ
            </label>
            <div
              onClick={() => fileRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-full border-2 border-dashed border-[#E5E7EB] rounded-sm p-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#D4A24C] hover:bg-[#FDFAF4] transition-colors"
            >
              {cvFile ? (
                <>
                  <FileText className="w-8 h-8 text-[#D4A24C]" />
                  <p className="text-[#0A2540] font-semibold" style={{ fontSize: '14px' }}>{cvFile.name}</p>
                  <p className="text-[#9CA3AF]" style={{ fontSize: '12px' }}>
                    {(cvFile.size / 1024 / 1024).toFixed(2)} MB — click để đổi file
                  </p>
                </>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-[#9CA3AF]" />
                  <p className="text-[#6B7280]" style={{ fontSize: '14px' }}>
                    Kéo thả hoặc <span className="text-[#D4A24C] font-semibold">chọn file</span>
                  </p>
                  <p className="text-[#9CA3AF]" style={{ fontSize: '12px' }}>PDF, DOC, DOCX — tối đa 5MB</p>
                </>
              )}
            </div>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-[#D4A24C] text-white rounded-sm hover:bg-[#C49040] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontWeight: 700, fontSize: '15px' }}
          >
            {submitting ? 'Đang gửi…' : 'Gửi hồ sơ ứng tuyển'}
          </button>
        </form>
      </div>
    </div>
  );
}
