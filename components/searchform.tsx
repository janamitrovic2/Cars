import React from 'react'
import Form from "next/form"
import SearchFormReset from './searchformreset';
import { Search } from 'lucide-react';

const SearchForm = ({query,page}:{query?:string,page?:boolean}) => {
	// page=false;
  if(page){
    return (
      <Form action='/products/' scroll={false} className="search_form">
        <input 
              name='query'
              className='search-input'
              placeholder='Search Cars'
          />
  
          <div className='flex gap-2'>
              {query && <SearchFormReset props={page}/> }
  
              <button type='submit' className='search-btn text-white'>
                <Search className='size-5 '/>
              </button>
          </div>
      </Form>
    )
  }
  
  else{
    return(
      <Form action='/' scroll={false} className="search_form">
      <input 
            name='query'
            className='search-input'
            placeholder='Search Startups'
        />

        <div className='flex gap-2'>
            {query && <SearchFormReset props={page}/> }

            <button type='submit' className='search-btn text-white'>
              <Search className='size-5 '/>
            </button>
        </div>
    </Form>
    )
  }
}

export default SearchForm