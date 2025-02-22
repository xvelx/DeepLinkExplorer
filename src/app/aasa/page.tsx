export default function AppleAppSiteAssociationUploader() {
    return (
        <main>
            <p>Helps to upload AASA</p>

            <br/>
            <a href="lloyds-retail://account-aggregation">Account A</a>

            <br/>
            <br/>
            
            <a href="intent://account-aggregation#Intent;scheme=lloyds-retail;package=com.grppl.android.shell.CMBlloydsTSB73;end">App</a>

            <br/>
            <br/>

            <a href="intent://account-aggregation#Intent;scheme=lloyds-retail;package=com.grppl.android.shell.CMBlloydsTSB73;S.browser_fallback_url=https%3A%2F%2Fsecure.lloydsbank.co.uk%2Fpersonal%2Fa%2Frmi%2F;end">App Re</a>


            <br/>
            <br/>

            <a href="intent://invalid-link#Intent;scheme=lloyds-retail;package=com.grppl.android.shell.CMBlloydsTSB73;S.browser_fallback_url=https%3A%2F%2Fsecure.lloydsbank.co.uk%2Fpersonal%2Fa%2Frmi%2F;end">Invalid link</a>

            <br/>
            <br/>

            <a href="intent://invalid-link#Intent;scheme=lloyds-retail-cusom;package=com.grppl.android.shell.CMBlloydsTSB73;S.browser_fallback_url=https%3A%2F%2Fsecure.lloydsbank.co.uk%2Fpersonal%2Fa%2Frmi%2F;end">Invalid link 2</a>


            <br/>
            <br/>

            <a href="intent://account-aggregation#Intent;scheme=lloyds-retail;package=com.grppl.bos.shell.CMBlloydsTSB73;S.browser_fallback_url=https%3A%2F%2Fsecure.lloydsbank.co.uk%2Fpersonal%2Fa%2Frmi%2F;end">Invalid link 3</a>

        </main>
    )
}
