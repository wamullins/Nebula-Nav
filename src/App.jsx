import './App.css'

import Header from "./components/Header"
import Main from "./components/Main"

function App() {

    return (
        <div className="app">
                <Header />
                <main >
                    <Main />
                </main>
                
        </div>
    )
}

export default App

/// NOTES AS I THINK OF THEM

// - the sun is not a planet -> could either be moved into the spaceBodies collection or made into it's own collection
// either way, if we need to differentiate it from planets so that planets can reference it as the parent element in order to sucessfully utilize "distance from parent field"

// need to figure out how the map page is going to route alongside the tab pages. Easiest way may be to make the front-end endpoint the same for both navigating from the map as well as from the tab pages.
// Stylistically i think it would be better to maintain the models throughout all pages in some capacity so it may make sense to try to include the model renderings (not sure of what file format) into the backened. If this isnt possible then maybe actual photos or photorealistic iamges

/////// NOTES relevant to just me at the moment /////// 

// For the search bar: may need to include a drop down menu to specif if the search is for a moon, planet or obejct. could use context to then have this value be passed directly into the axios call url. and into the page url ( no longer need a specific search results page then either )

/// taking this a step further-> i bet i can use context to specify moon, planet, and spacebody and then use that to dry up the code for everything i have so far. Context directing the call to planet/moon/SO and the id from param used for the object page. 

// finished the above ideas but hit a weird error with reloading he apge wiping out the context. may need to use session storage for this instead of context. will ask tas

// if this all doesn't work i can go back in and hard code things but there's definitely a way to make this work. 
