import 'cypress-iframe'
describe('iframeHandle',()=>{
    it('iframe',()=>{
        cy.visit('https://jqueryui.com/draggable/')
        cy.frameLoaded('.demo-frame')
        cy.iframe().find('[class="ui-widget-content ui-draggable ui-draggable-handle"]').invoke('text').then((res)=>{
            expect(res).to.contains('Drag me around')
        })
    })
})