# Magnify lens drag

Provides an easy way to have the functionality of a magnify glass on the DOM.

## Installation

This project is ready to be cloned and use it on other projects. Just need to replace the properties on the web components.

**Magnify Asset**

```
<magnify-asset src="path/to/your/image" style="width: 100%"></magnify-asset>
```

**CTA Button**

```
<cta-button src="img/cta.png" class="cta"></cta-button>
```

If you want to use it in another project, please follow the External installation chapter.


## Installation on another project

To integrate this functionality on your current project/ad, you need to import some libraries.

### External Dependecies

**jQuery**

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js" integrity="sha512-b6lGn9+1aD2DgwZXuSY4BhhdrDURVzu7f/PASu4H1i5+CRpEalOOz/HNhgmxZTK9lObM1Q7ZG9jONPYz8klIMg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

**jQuery UI**

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

**jQuery TP**

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js" integrity="sha512-0bEtK0USNd96MnO4XhH8jhv3nyRF0eK87pJke6pkYf3cM0uDIhNJy9ltuzqgypoIFXw3JSuiy04tVk4AjpZdZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

### Internal Dependencies

**Internal Logic**

This file is responsible of the logic of drag and colorization through the magnify len.

```
<script src="js/unitScript.js"></script>
```

**Web components**

This file is responble to inject the webcomponents on your DOM to be use properly.

### Usage

**Magnify Asset**

```
<magnify-asset src="path/to/your/image" style="width: 100%"></magnify-asset>
```

**CTA Button**

```
<cta-button src="img/cta.png" class="cta"></cta-button>
```
