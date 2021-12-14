import React from 'react'
import NewAllProperties from './NewAllProperties';
import NewSearchFilter from './NewSearchFilter';
function Home() {
    return (
            <section class="bg-light">
			
            <div class="container">
            <div class="row">
						<div class="col-lg-12 col-md-12">
							<div class="filter_search_opt">
								<a href="javascript:void(0);" onclick="openFilterSearch()">Search Property<i class="ml-2 ti-menu"></i></a>
							</div>
						</div>
			</div>
            <div class="row">
                <NewAllProperties/>
                <NewSearchFilter />


            </div>
                
            </div>		
        </section>
    )
}

export default Home
