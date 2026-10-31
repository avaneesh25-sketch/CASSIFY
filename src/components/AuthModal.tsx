import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: { email: string; name: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleGoogleSimulated = () => {
    onSuccess({
      email: 'avaneeshpramod25@gmail.com',
      name: 'Avaneesh P.',
    });
    onClose();
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSuccess({
        email,
        name: name.trim() || email.split('@')[0],
      });
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#f8f9f4] border border-[#dce0d5] rounded-[16px] p-6 sm:p-8 shadow-2xl text-[#172019]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-light text-[#62675f] hover:text-[#172019] leading-none"
        >
          ×
        </button>

        <div className="text-[11px] font-bold tracking-[1.5px] text-[#78a831] uppercase mb-2">
          CASSIFY ACCOUNT
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-[#172019] mb-2">
          Sign in to Cassify
        </h2>
        <p className="text-xs text-[#62675f] mb-6">
          Save your practice cases, verify XP, and compete in the campus arena.
        </p>

        <button
          onClick={handleGoogleSimulated}
          className="w-full button-primary justify-center text-sm py-3 px-4 rounded-[8px] mb-5 flex items-center gap-3 cursor-pointer shadow-xs"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V13.4h6.887C18.2 16.14 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.47 0 2.82.525 3.87 1.395l2.4-2.4C16.89 3.495 14.7 2.6 12.24 2.6 7.02 2.6 2.76 6.84 2.76 12.06s4.26 9.46 9.48 9.46c5.445 0 9.06-3.825 9.06-9.225 0-.615-.06-1.215-.165-1.785H12.24z" />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-[#dce0d5]"></div>
          <span className="flex-shrink mx-4 text-xs text-[#8c9484] uppercase">Or with email</span>
          <div className="flex-grow border-t border-[#dce0d5]"></div>
        </div>

        <form onSubmit={handleEmailSubmit} className="mt-3 space-y-3">
          <div>
            <label className="block text-xs font-bold text-[#172019] mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full border border-[#dce0d5] bg-white rounded-lg p-2.5 text-xs text-[#172019] focus:outline-[#81a536]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#172019] mb-1">Student Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@university.edu"
              className="w-full border border-[#dce0d5] bg-white rounded-lg p-2.5 text-xs text-[#172019] focus:outline-[#81a536]"
            />
          </div>

          <button
            type="submit"
            className="w-full button-primary justify-center text-xs py-2.5 px-4 rounded-lg font-semibold mt-4"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
