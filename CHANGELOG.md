# Change Log

## [1.2.0] 2020-06-12
```
<ModalHeader className="justify-content-center" toggle={this.toggleModalDemo}>
    Modal Title
</ModalHeader>
```
  You should use
```
<div className="modal-header justify-content-center">
  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModalDemo}>
    <span aria-hidden="true">×</span>
  </button>
  <h5 className="modal-title">Modal Title</h5>
</div>
```
### Major style changes
- `src/assets/scss/paper-kit/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/paper-kit/_nucleo-icons.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/paper-kit/plugins/photo-swipe/_main-settings.scss` (changed the images import to `~assets/img` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/react/paper-kit/_responsive.scss` 
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ gulp@4.0.2 (for Jason Maynard copyrights)
+ gulp-append-prepend@1.0.8 (for Jason Maynard copyrights)
### Updated dependencies
```
headroom.js           0.9.4   →    0.11.0
moment               2.24.0   →    2.26.0
node-sass            4.12.0   →    4.14.1
nouislider           14.0.2   →    14.5.0
react                16.8.6   →   16.13.1
react-dom            16.8.6   →   16.13.1
react-router-dom      5.0.1   →     5.2.0
react-scripts         3.0.1   →     3.4.1
react-select          3.0.4   →     3.1.0
reactstrap            8.0.0   →     8.4.1
@types/googlemaps    3.36.6   →    3.39.6
@types/react        16.8.23   →   16.9.35
typescript            3.5.2   →     3.9.5
```
