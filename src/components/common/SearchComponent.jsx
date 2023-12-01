import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchComponent = ({ onFilter, filterText }) => (
	<div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-[34.25rem] h-[2.5rem] items-center   rounded-[0.25rem] border border-primaryBlue'>
		<input
			type='text'
			className='p-2 bg-transparent outline-none w-full font-[400] text-[1rem] leading-normal text-black'
			placeholder='Search a medical record, doctor or history'
			onChange={onFilter}
			name={filterText}
			value={filterText}
		/>
		<div className='w-[2.75rem] h-full bg-primaryBlue flex justify-center items-center'>
			<FiSearch
				size={24}
				className='font-[400] text-[1rem] leading-normal text-white'
			/>
		</div>
	</div>
);

export default SearchComponent;
