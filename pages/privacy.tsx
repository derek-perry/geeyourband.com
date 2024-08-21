import type { NextPage } from "next"
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import LinkInternal from "../components/Links/LinkInternal"
import LinkInternalButton from "../components/Links/LinkInternalButton"

const PrivacyPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center">
      <SiteHead title="GYBST Privacy Policy" description="Gee, Your Band Smells Terrific is Cincinnati, Ohio’s premier 1970s showcase & dance band playing super hits of the 70s!" url="privacy" />

      <main className="pt-9 px-9 max-w-[1100px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="policy">
          <section id="contentheader" className="py-9">
            <h1 className="text-6xl font-bold">Privacy Policy</h1>
            <div className="flex flex-row flex-wrap"><LinkInternalButton href="" title="Return to Index Page">Go Home</LinkInternalButton></div>
          </section>

          <section id="privacypolicy" className="max-w-[800px] text-left">
            <h2 id="overview" className="text-4xl font-bold">Privacy Policy Overview</h2>
            <p className="my-4 text-2xl">It is GYBST’s policy to respect your privacy regarding any information GYBST may collect while operating the website, GYBST. This Privacy Policy applies to <LinkInternal href="" title="GeeYourBand.com">GeeYourBand.com</LinkInternal> (hereinafter, “the website”, “Gee, Your Band Smells Terrific's website”, “GYBST's website”, “Gee, Your Band Smells Terrific”, or “GYBST”). GYBST respects your privacy and is committed to protecting personally identifiable information you may provide GYBST through the website. GYBST has adopted this privacy policy (“Privacy Policy”) to explain what information may be collected from the website, how GYBST uses this information, and under what circumstances GYBST may disclose the information to third parties. This Privacy Policy applies only to information GYBST collects through the website and does not apply to the collection of information from other sources.</p>
            <p className="my-4 text-2xl">This Privacy Policy sets forth the general rules and policies governing your experience with the website. Depending on your activities when visiting the website, you may be required to agree to additional terms and conditions.</p>

            <h2 id="user-data" className="text-4xl font-bold">Website User Data</h2>
            <p className="my-4 text-2xl">Like most websites, GYBST collects non-personally-identifying information of the sort that devices and servers typically make available, such as the device/device type, language preference, and the date and time of each user request. GYBST’s purpose in collecting non-personally identifying information is to better understand how GYBST’s website users interact with the website. From time to time, GYBST may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of the website.</p>

            <h2 id="gathering-info" className="text-4xl font-bold">Gathering of Personally-Identifying Information</h2>
            <p className="my-4 text-2xl">Certain users of GYBST’s website choose to interact with GYBST in ways that require GYBST to gather personally-identifying information. The amount and type of information that GYBST gathers depends on the nature of the interaction. GYBST runs analytics to understand how you interact with the website which should continuously improve your website experience (e.g. identifying that a feature is broken).</p>

            <h2 id="security" className="text-4xl font-bold">Security</h2>
            <p className="my-4 text-2xl">The security of your Personal Information is important to GYBST, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While GYBST strives to use commercially acceptable means to protect your Personal Information, GYBST cannot guarantee absolute security.</p>

            <h2 id="child-data" className="text-4xl font-bold">Personal Data Concerning Children</h2>
            <p className="my-4 text-2xl">GYBST does not knowingly collect any personal data concerning children under 16 years old. In the unlikely event that GYBST has (or you believe GYBST has) collected information from a child, please contact GYBST by using the contact info at the bottom of this privacy policy. GYBST will take all necessary steps to purge the data from relevant systems.</p>

            <h2 id="external-links" className="text-4xl font-bold">Links To External Sites</h2>
            <p className="my-4 text-2xl">This website may contain links to external sites that are not operated by GYBST. If you click on a third party link, you will be directed to that third party’s site. GYBST strongly advises you to review the Privacy Policy and terms and conditions of every site you visit.</p>
            <p className="my-4 text-2xl">GYBST has no control over, and assumes no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>

            <h2 id="info-protection" className="text-4xl font-bold">Protection of Certain Personally-Identifying Information</h2>
            <p className="my-4 text-2xl">GYBST discloses potentially personally-identifying and personally-identifying information only to those of employees, contractors and affiliated organizations that (i) need to know that information in order to process it on GYBST’s behalf or to provide services available on GYBST’s website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using GYBST’s website, you consent to the transfer of such information to them. GYBST will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to employees, contractors and affiliated organizations, as described above, GYBST discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when GYBST believes in good faith that disclosure is reasonably necessary to protect the property or rights of GYBST, third parties or the public at large.</p>
            <p className="my-4 text-2xl">If you send GYBST a request (for example via a support email or via one of the feedback mechanisms), GYBST reserves the right to store it privately in order to help clarify or respond to your request. GYBST takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>

            <h2 id="statistics" className="text-4xl font-bold">Aggregated Statistics</h2>
            <p className="my-4 text-2xl">GYBST may collect statistics about the behavior of users in the website. GYBST may display this information publicly or provide it to others. However, GYBST does not disclose your personally-identifying information.</p>

            <h2 id="transfers" className="text-4xl font-bold">Business Transfers</h2>
            <p className="my-4 text-2xl">If GYBST, or substantially all of his assets, were acquired, or in the unlikely event that GYBST goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of GYBST may continue to use your personal information as set forth in this policy.</p>

            <h2 id="changes" className="text-4xl font-bold">Privacy Policy Changes</h2>
            <p className="my-4 text-2xl">Although most changes are likely to be minor, GYBST may change this Privacy Policy from time to time, and in GYBST’s sole discretion. GYBST encourages users to frequently check this page for any changes to this Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
            <p className="my-4 text-2xl"><i>This Privacy Policy was last updated on April 13, 2023.</i></p>

            <h2 id="contact-info" className="text-4xl font-bold">Contact Information</h2>
            <p className="my-4 text-2xl">If you have any questions about this Privacy Policy, please contact Bobby Dingo via email at <LinkExternal className="break-all" href="mailto:bobbydingo@yahoo.com" title="Email Bobby Dingo at bobbydingo@yahoo.com">bobbydingo@yahoo.com</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  )
}

export default PrivacyPage