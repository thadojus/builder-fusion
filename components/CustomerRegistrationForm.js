import { useState } from 'react';

const initial = { firstName: '', lastName: '', email: '', phone: '', address: '' };

export default function CustomerRegistrationForm() {
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const canSubmit = Boolean(apiBase);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus({ type: 'loading', message: '' });
    try {
      const res = await fetch(`${apiBase}/api/customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with ${res.status}`);
      }
      setData(initial);
      setStatus({ type: 'success', message: 'Registration successful.' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  return (
    <section className="bg-yellow-50 rounded-lg shadow-md p-6 mt-12 border border-yellow-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Registration</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input name="firstName" value={data.firstName} onChange={onChange} required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input name="lastName" value={data.lastName} onChange={onChange} required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={data.email} onChange={onChange} required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input name="phone" value={data.phone} onChange={onChange} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input name="address" value={data.address} onChange={onChange} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={!canSubmit || status.type==='loading'} className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md disabled:opacity-60">
            {status.type==='loading' ? 'Submitting...' : 'Register'}
          </button>
          {status.type === 'success' && <span className="text-green-700">{status.message}</span>}
          {status.type === 'error' && <span className="text-red-700">{status.message}</span>}
        </div>
      </form>
    </section>
  );
}
