import React, { Component } from 'react';
import SectionedHeader from 'CommonContainers/sectionedHeader';

export default class SectionedContainer extends Component {

  render() {
     return(
       <div>
         <div> {/* Left container */}
            <div> {/* Header */}
              
            </div>
         </div>

          <div> {/* Right Container */}
            <SectionedHeader />
          </div>
       </div>
     )
  }

}