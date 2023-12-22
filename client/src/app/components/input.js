export default function Input({type, id, placeholder, value, onChange, className = '', containerClassName = '', labelClassName = '' }) {
    return (
        <div className={`${containerClassName}`}>
            <label htmlFor={id} className={`block ml-1 mb-2 text-sm font-medium text-gray-700 ${labelClassName}`}>Email address</label>
            <input type={type} id={id} value={value} onChange={onChange} className={`bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full px-2.5 py-2 ${className}`} placeholder={placeholder} />
        </div>
    )
}