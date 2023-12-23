export default function Input({type, name, placeholder, value, onChange, label, className = '', containerClassName = '', labelClassName = '' }) {
    return (
        <div className={`${containerClassName}`}>
            <label htmlFor={name} className={`block ml-1 mb-2 text-sm font-medium text-gray-700 ${labelClassName}`}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} className={`bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full px-2.5 py-2 ${className}`} placeholder={placeholder} />
        </div>
    )
}