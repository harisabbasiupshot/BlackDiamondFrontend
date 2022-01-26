import React, { useState,useContext } from 'react'
import NewAllProperties from './NewAllProperties';
import NewSearchFilter from './NewSearchFilter';
import WannaSignUp from './WannaSignUp';
import '../fullcss.css'

function Home() {
    const [allproperties, setAllproperties] = useState([])
    
    
    return (
        <section >
            

            <div class="container">


                <div class="row">
                    {/* <div class="col-lg-12 col-md-12">
                        <div class="filter_search_opt">
                            <a href="javascript:void(0);" onclick="openFilterSearch()">Search Property<i class="ml-2 ti-menu"></i></a>
                        </div>
                    </div> */}
                </div>
                
                <div class="row">
                    <NewAllProperties allproperties={allproperties} setAllproperties={setAllproperties} />
                    <NewSearchFilter setAllproperties={setAllproperties} />
                    




                </div>


            </div>

        </section>

    )
}

export default Home
