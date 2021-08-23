import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

// markup
const TermOfUseContain = () => {
    return (
        <section id="termsofuse" className={styles.termsofuse}>
            <div className={styles.innerWrapper}>
                <h2 className={"polity__title"}>
                    General terms and conditions of use
                </h2>
                <h3 className="heading-tertiary u-margin-bottom-tiny">----</h3>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>OVERVIEW</p>
                <p className="polity__paragraph">This website is operated by Stokop. On this site, the terms
                    "we", "us" and "our" refer to Stokop. Stokop provides this website, including all
                    information, tools and services available to you, the user, subject to your acceptance of all the
                    terms, conditions, policies and notices set forth herein.</p>
                <p className="polity__paragraph">By visiting this site and/or purchasing one of our products, you are
                    engaging in our "Service" and agree to be bound by the following terms and conditions ("Terms of
                    Service"), including additional terms, conditions and policies referred to herein and/or accessible
                    by hyperlink. These Terms and Conditions of Use apply to all users of this site, including but not
                    limited to, users who browse the site, who are vendors, customers, merchants, and/or content
                    contributors.</p>
                <p className="polity__paragraph">Please read these Terms and Conditions of Sale and Use carefully before
                    accessing or using our website. By accessing or using any part of this site, you agree to be bound
                    by these Terms and Conditions. If you do not accept all the terms and conditions of this agreement,
                    then you should not access the website or use the services offered on it. If these Terms and
                    Conditions of Use are deemed to be an offer, acceptance is expressly limited to these Terms and
                    Conditions of Use.</p>
                <p className="polity__paragraph">Any new features and tools that are added to this website in the future
                    will also be subject to these Terms of Use. You may review the most current version of the Terms of
                    Use at any time on this page. We reserve the right to update, change or replace any part of these
                    Terms of Use by posting updates and/or changes on our website. It is your responsibility to check
                    this page regularly to see if any changes have been made. Your continued use or access to the
                    website after any changes are posted constitutes your acceptance of those changes.</p>
                <p className="polity__paragraph " style={{textDecoration: "underline"}}>ARTICLE 1 - TERMS AND CONDITIONS
                    OF USE FOR THE WEBSITE</p>
                <p className="polity__paragraph">By accepting these Terms and Conditions of Use, you declare that you
                    have reached the age of majority in your country, state or province of residence, and that you have
                    given us your consent to allow any minor in your care to use this website.</p>
                <p className="polity__paragraph">Use of our products for any illegal or unauthorized purpose is
                    prohibited, nor may you, in using the Service, violate the laws of your jurisdiction (including but
                    not limited to copyright laws).</p>
                <p className="polity__paragraph">You must not transmit worms, viruses or any other code of a destructive
                    nature.</p>
                <p className="polity__paragraph">Any breach or violation of these Terms of Use will result in the
                    immediate termination of your Services.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 2 - GENERAL
                    CONDITIONS</p>
                <p className="polity__paragraph">We reserve the right to deny access to the services to any person at
                    any time, for any reason whatsoever.</p>
                <p className="polity__paragraph">You understand that your content (excluding your credit card
                    information) may be transferred unencrypted, and this includes (a) transmissions over various
                    networks; and (b) changes to conform and adapt to technical requirements for connecting networks or
                    devices. Credit card information is always encrypted during transmission over networks.</p>
                <p className="polity__paragraph">You agree not to reproduce, duplicate, copy, sell, resell or exploit
                    any part of the Service or use of the Service, or any access to the Service or contact on the
                    website, through which the Service is provided, without our prior express written permission.</p>
                <p className="polity__paragraph">The headings used in this agreement are included for your convenience,
                    and will not limit or affect these Terms.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 3 - ACCURACY,
                    COMPLETENESS AND TIMELINESS OF INFORMATION</p>
                <p className="polity__paragraph">We are not responsible if the information available on this site is not
                    accurate, complete or up to date. The content of this site is provided for information purposes only
                    and should not be your sole source of information for making decisions without first consulting more
                    accurate, complete and up-to-date sources of information. If you decide to rely on the content
                    presented on this site, you do so at your own risk.</p>
                <p className="polity__paragraph">This site may contain certain prior information. This prior
                    information, by its nature, is not up to date and is provided for information purposes only. We
                    reserve the right to modify the content of this site at any time, but we have no obligation to
                    update the information on our site. You agree that it is your responsibility to monitor changes to
                    our site.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 4 - OPTIONAL TOOLS</p>
                <p className="polity__paragraph">We may provide you with access to third party tools over which we have
                    no monitoring, control or influence.</p>
                <p className="polity__paragraph">You acknowledge and agree that we provide access to such tools on an
                    "as is" and "as available" basis, without any warranties, representations or conditions of any kind
                    and without any endorsement. We shall have no legal liability arising out of or in connection with
                    the use of these optional third party tools.</p>
                <p className="polity__paragraph">If you use the optional tools offered on the Site, you do so at your
                    own risk and discretion, and you should consult the terms and conditions under which such tools are
                    offered by the applicable third party vendor(s).</p>
                <p className="polity__paragraph">We may also offer new services and/or features on our site (including
                    new tools and resources) in the future. These new features and services will also be subject to
                    these Terms of Use.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 5 - THIRD PARTY LINKS</p>
                <p className="polity__paragraph">Certain content, products and services available through our Service
                    may include material from third parties.</p>
                <p className="polity__paragraph">Third party links on this site may redirect you to third party websites
                    that are not affiliated with us. We are not required to review or evaluate the content or accuracy
                    of these sites, and we do not guarantee or assume any responsibility for any content, website,
                    product, service or other item accessible on or from such third party sites.</p>
                <p className="polity__paragraph">We are not responsible for any harm or damage in connection with the
                    purchase or use of goods, services, resources, content, or any other transaction conducted in
                    connection with these third party websites. Please read the policies and practices of third parties
                    carefully and make sure you understand them before engaging in any transaction. Any complaints,
                    claims, concerns, or questions regarding the products of these third parties should be directed to
                    the same third parties.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 6 - COMMENTS, SUGGESTIONS
                    AND OTHER PROPOSALS FROM USERS</p>
                <p className="polity__paragraph">If, at our request, you submit specific content (for example, to enter
                    contests), or if without our request, you send creative ideas, suggestions, proposals, plans, or
                    other materials, whether online, by e-mail, by post, or otherwise (collectively, "Comments"), you
                    grant us the right, at any time and without restriction, to edit, copy, publish, distribute,
                    translate, and otherwise use in any media any Comments you send to us. We are not and shall not be
                    obligated to (1) maintain the confidentiality of any Comments; (2) pay compensation to anyone for
                    any Comments provided; or (3) respond to any Comments.</p>
                <p className="polity__paragraph">We may, but are under no obligation to, monitor, modify or remove
                    content that we believe, in our sole discretion, is unlawful, offensive, threatening, abusive,
                    defamatory, libelous, pornographic, obscene or otherwise objectionable, or infringes any
                    intellectual property or these Terms and Conditions of Sale and Use.</p>
                <p className="polity__paragraph">You agree to write comments that do not violate the rights of third
                    parties, including copyrights, trademarks, privacy, personality, or other personal or proprietary
                    rights. You also agree that your Comments will not contain any illegal, defamatory, offensive or
                    obscene content, nor will they contain computer viruses or other malicious software that could in
                    any way affect the operation of the Service or any related website. You may not use a false e-mail
                    address, pretend to be someone you are not, or try to mislead us and/or third parties as to the
                    origin of your comments. You are entirely responsible for all comments you post and for their
                    accuracy. We take no responsibility and disclaim any liability for any comments you or any third
                    party post.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>SECTION 7 - PERSONAL
                    INFORMATION</p>
                <p className="polity__paragraph">The submission of your personal information on our website is governed
                    by our Privacy Policy.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 8 - PROHIBITED USES</p>
                <p className="polity__paragraph">In addition to the prohibitions set forth in the Terms and Conditions
                    of Use, you are prohibited from using the Site or its content: (a) for illegal purposes; (b) to
                    induce or participate in unlawful acts by third parties; (c) to violate any state, federal,
                    provincial or international law, rule or regulation; (d) to infringe or violate our or third
                    parties' intellectual property rights; (e) to harass, abuse, insult, injure, defame, libel, slander,
                    denigrate, intimidate or discriminate against anyone based on gender, sexual orientation, religion,
                    ethnic origin, race, age, national origin, or disability; (f) to submit false or misleading
                    information; (g) to upload or transmit viruses or any other type of malicious code that will or may
                    be used in a manner that impairs the functionality or operation of the Service or any related,
                    independent, or Internet web site; (h) to collect or track the personal information of others; (i)
                    to spam, phish, hijack a domain, extort information, browse, search or scan the web (or any other
                    resource); (j) for obscene or immoral purposes; or (k) to violate or circumvent the security
                    measures of our Service, any other website, or the Internet. We reserve the right to terminate your
                    use of the Service or any related website for violating the prohibited uses.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 9 - DISCLAIMER OF
                    WARRANTIES AND LIMITATION OF LIABILITY</p>
                <p className="polity__paragraph">We make no warranty or representation that your use of our Service will
                    be uninterrupted, timely, secure or error-free.</p>
                <p className="polity__paragraph">We do not warrant that the results that may be obtained through the use
                    of the Service will be accurate or reliable.</p>
                <p className="polity__paragraph">You expressly agree that your use of, or inability to use, the Service
                    is at your sole risk. The Service and all products and services provided to you through the Service
                    are (unless otherwise expressly stated by us) provided to you "as is" and "as available" for your
                    use without representations, warranties or conditions of any kind, either express or implied,
                    including all implied warranties of merchantability or merchantable quality, fitness for a
                    particular purpose, durability, title and non-infringement.</p>
                <p className="polity__paragraph">In no event shall Stokop, our directors, officers, employees,
                    affiliates, agents, contractors, interns, suppliers, service providers and licensors be liable for
                    any injury, loss, claim, or direct, indirect, incidental, punitive, special, or consequential
                    damages of any kind, including but not limited to loss of profits, revenues, savings, data,
                    replacement costs or any similar damages, whether in contract, tort (including negligence), strict
                    liability or otherwise, arising out of your use of any service or product from the Service, or in
                    respect of any other claim relating in any way to your use of the Service or any product, including
                    but not limited to any errors or omissions in any content, or any loss or damage of any kind arising
                    out of your use of the Service or any content (or product) published, transmitted, or otherwise made
                    available through the Service, even if you have been advised of the possibility thereof. Because
                    some states or jurisdictions do not allow the exclusion or limitation of liability for consequential
                    or incidental damages, our liability will be limited to the maximum extent permitted by law.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 10 - COMPENSATION</p>
                <p className="polity__paragraph">You agree to indemnify, defend and hold Stokop, our parent company,
                    subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service
                    providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand,
                    including reasonable attorneys' fees, made by any third party due to or arising out of your
                    violation of these Terms of Use or the documents referred to in them, or your violation of any law
                    or the rights of a third party.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 11 - SEVERABILITY</p>
                <p className="polity__paragraph">In the event that any provision of these Terms of Use is held to be
                    illegal, invalid or unenforceable, such provision shall nevertheless be enforced to the fullest
                    extent permitted by law, and the unenforceable portion shall be deemed severed from these Terms of
                    Use, such severance shall not affect the validity and enforceability of any remaining
                    provisions.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 12 – RÉSILIATION</p>
                <p className="polity__paragraph">Obligations and liabilities incurred by the parties prior to the date
                    of termination shall survive the termination of this Agreement for all purposes.</p>
                <p className="polity__paragraph">These Terms of Use are effective unless and until terminated by either
                    you or not. You may terminate these Terms of Use at any time by notifying us that you no longer wish
                    to use our Services, or when you stop using our site.</p>
                <p className="polity__paragraph">If we determine, in our sole discretion, that you are failing, or if we
                    suspect that you have been unable to comply with the terms of these Terms of Use, we may also
                    terminate this Agreement at any time without notice to you and you will remain liable for all
                    amounts owing up to and including the date of termination, and/or we may deny you access to our
                    Services (or any part thereof).</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 13 - ENTIRE AGREEMENT</p>
                <p className="polity__paragraph">Any failure by us to exercise or enforce any right or provision of
                    these Terms of Use shall not constitute a waiver of such right or provision.</p>
                <p className="polity__paragraph">These Terms of Use or any other policies or operating rules that we
                    post on this site or in connection with the Service constitute the entire understanding and
                    agreement between you and us and govern your use of the Service, and supersede all prior and
                    contemporaneous communications, proposals and agreements, whether oral or written, between you and
                    us (including, but not limited to, any prior version of the Terms of Use).</p>
                <p className="polity__paragraph">Any ambiguity as to the interpretation of these Terms and Conditions of
                    Use shall not be construed to the detriment of the drafting party.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 14 - APPLICABLE LAW</p>
                <p className="polity__paragraph">These General Terms and Conditions of Sale and Use, as well as any
                    other separate agreement by means of which we provide you with Services, shall be governed and
                    interpreted in accordance with the laws in force in Mons, BRU, 7000, Belgium.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 15 - AMENDMENTS TO THE
                    GENERAL CONDITIONS OF USE</p>
                <p className="polity__paragraph">You can view the most recent version of the Terms of Use at any time on
                    this page.</p>
                <p className="polity__paragraph">We reserve the right, at our sole discretion, to update, modify or
                    replace any part of these Terms and Conditions of Use by posting updates and changes on our site. It
                    is your responsibility to visit our site regularly to check for changes. Your continued use of or
                    access to our site following the posting of any changes to these Terms and Conditions of Use
                    constitutes acceptance of those changes.</p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}>ARTICLE 16 - CONTACT DETAILS</p>
                <p className="polity__paragraph">Questions regarding the Terms of Use should be sent to us at
                    info@stokop.com.</p>
            </div>
        </section>
    );
};

export default TermOfUseContain;
