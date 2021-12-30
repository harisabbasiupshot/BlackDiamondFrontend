import React, { useState } from 'react'
import NewAllProperties from './NewAllProperties';
import NewSearchFilter from './NewSearchFilter';
import WannaSignUp from './WannaSignUp';
import '../fullcss.css'
function Home() {
    const [allproperties, setAllproperties] = useState([])
    return (
        <section class="bg-light">

            <div class="container">
                {/* <div class="imagetest">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar" class="image" />
                    <div class="overlay">
                        <a href="#" class="icon" title="User Profile">
                            <i class="fa fa-user"></i>
                        </a>
                    </div>
                </div> */}

                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="filter_search_opt">
                            <a href="javascript:void(0);" onclick="openFilterSearch()">Search Property<i class="ml-2 ti-menu"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <NewAllProperties allproperties={allproperties} setAllproperties={setAllproperties} />
                    <NewSearchFilter setAllproperties={setAllproperties} />
                    
                    


                </div>
                

            </div>
            <WannaSignUp />
        </section>
    )
}

export default Home
