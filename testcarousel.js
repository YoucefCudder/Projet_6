class Carousel {

 /**
  * @param {HTMLElement} element
  */

  constructor(element) {
      this.element = element
      let children = [].slice.call(element.children)
      this.currentItem = 0
      this.root = this.createDivWithClass('carousel')
      this.container = this.createDivWithClass('carousel_container')
      this.root.appendChild(this.container)
      this.element.appendChild(this.root)
      this.items = children.map((child) => {
          let item =  this.createDivWithClass('carousel_item')
          item.appendChild(child)
          this.container.appendChild(item)
          return item
      })
      this.setStyle ()
      this.createNavigation()
  }

  setStyle() {
    let ratio = this.items.length / 5
    this.container.style.width = (ratio * 100) + "%"
    this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%"
    )
  }

  createNavigation() {
    let nextButton = this.createDivWithClass('carousel__next')
    let prevButton = this.createDivWithClass('carousel__prev')
    this.root.appendChild(nextButton)
    this.root.appendChild(prevButton)
    nextButton.addEventListener('click', this.next.bind(this))
    prevButton.addEventListener('click', this.prev.bind(this))

  }

  next () {
    this.gotoItem(this.currentItem + 2)
  }

  prev () {
    this.gotoItem(this.currentItem - 2)
  }


  /**
 * déplace le carousel ver l'élément ciblé
 * @param {number} index 
 */
  gotoItem (index) {
    if (index < 0) {
        index = this.items.length - 4
      } else if (index >= this.items.length || this.items[this.currentItem + 4] 
        === undefined && index > this.currentItem) {index = 0}
    let translateX = index * -100 / this.items.lenght
    this.container.style.transform = 'translate3d(' + translateX +'%, 0, 0)'
    this.currentItem = index

  }

  /**
   * 
   * @param {string} className
   * @returns {HTMLElement} 
   */

  createDivWithClass (className) {
      let div = document.createElement('div')
      root.setAttribute('class', className)
      return div
  }

}



    
new Carousel(document.querySelector('carousel_1'))    

        
new Carousel(document.querySelector('carousel_2'))    
    
new Carousel(document.querySelector('carousel_3'))    
    
new Carousel(document.querySelector('carousel_4'))    
            