import React from 'react'
import { Container, ContainerTitle, Href, ArrowLeft, ArrowRight, AboutTitle, AboutSubtitle, AboutParagraph } from "./style";
import arrow from '../../../img/arrow.png'

export function Sobre() {
    return (
        <Container>
            <ContainerTitle>
                <Href href="http://localhost:3000/sobre/devs"><ArrowLeft src={arrow}/></Href>
                <AboutTitle>Saturno Geek</AboutTitle>
                <Href href="http://localhost:3000/sobre/devs"><ArrowRight src={arrow}/></Href>
            </ContainerTitle>
            <AboutSubtitle>Nós somos a Saturno Geek, uma loja e-Commerce de produtos geek, feita por nerds para nerds.</AboutSubtitle>
            <AboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sem pulvinar, consequat nibh eu, convallis ex. Vestibulum aliquet in quam id congue. Fusce condimentum lorem non tortor rutrum, non interdum nisl maximus. Donec mollis nisi nec ipsum placerat, at lobortis augue laoreet. Cras quis tempor neque, ut luctus libero. Quisque fringilla, orci et suscipit volutpat, urna ex pretium nibh, eget facilisis turpis enim nec eros. Suspendisse non dui at dolor mollis egestas at quis quam. Aliquam sem libero, volutpat vel nibh ac, consequat consequat arcu. Ut condimentum mi varius tincidunt blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla semper egestas diam non eleifend. Phasellus ac nibh sem. Integer eget tempor ipsum. Quisque nec libero in nibh efficitur egestas. In maximus dapibus tortor. Duis vel mollis libero.

Praesent mi ipsum, elementum a sapien vel, vehicula faucibus ipsum. Quisque fringilla lacus vel arcu vulputate, ac cursus eros laoreet. Phasellus pretium augue ac sem semper venenatis. Maecenas ultrices id lacus vitae fermentum. Sed enim dolor, mollis eget diam in, efficitur faucibus massa. Donec venenatis facilisis nisi, non iaculis magna aliquam at. Suspendisse porta quam sed turpis efficitur ornare. Etiam nulla lorem, pharetra ullamcorper tincidunt eu, aliquet tempus diam. Phasellus scelerisque, ipsum sed egestas elementum, ipsum felis cursus nisl, in egestas velit nunc sed dui. Integer interdum quis elit id lobortis.

Cras gravida, massa nec luctus porta, neque nisi luctus purus, nec elementum metus ipsum eget leo. Vestibulum luctus leo ut laoreet finibus. Donec elementum velit sit amet lorem pharetra, sit amet maximus sem lobortis. Sed eros elit, convallis at consequat eget, feugiat et justo. Quisque ultricies arcu a turpis tempus finibus. Quisque porta a est nec porttitor. Vivamus nec velit laoreet, lobortis mi et, auctor eros. Morbi dictum dui sit amet lectus gravida hendrerit. Mauris enim dui, luctus a ligula at, dictum feugiat lacus.

Sed varius justo vel massa tempor, a ultrices dolor malesuada. Mauris eu urna tortor. Phasellus non finibus nisl. Nullam non sem quis tortor faucibus placerat sit amet non risus. Curabitur iaculis risus tortor, nec posuere massa malesuada a. Nunc sagittis velit ac lectus dictum, non vehicula diam pretium. Vivamus tortor lectus, ultrices ac diam at, tincidunt scelerisque nibh. Donec eget elementum ante. Proin porta vel neque et mattis. In condimentum finibus vulputate. Phasellus semper eros sagittis, condimentum libero ac, hendrerit neque. Mauris maximus urna ut neque malesuada gravida. Suspendisse tincidunt ex nibh, non fermentum metus fermentum dapibus. Fusce placerat, elit at elementum egestas, mi purus consequat velit, quis sagittis lectus metus sed felis. Praesent vitae efficitur turpis.

Etiam sed egestas dui, sit amet tristique metus. Aenean non porta orci, id varius mi. Sed tincidunt ac lorem id posuere. Vestibulum semper metus in mauris venenatis tristique. Aenean sit amet leo ultricies, feugiat sem id, aliquam dui. Quisque id facilisis dolor, at malesuada odio. In hac habitasse platea dictumst. Nunc ac eleifend mauris. Nulla accumsan vehicula convallis. Donec a enim lacinia, efficitur sapien non, fringilla enim. Ut eu pretium nunc. Sed fringilla enim vitae tempus convallis. Vestibulum quis finibus nibh. Proin rutrum aliquam nisi vitae porttitor. Nam vitae diam lacinia, fringilla urna quis, lacinia justo.</AboutParagraph>
        </Container>
    )
}
