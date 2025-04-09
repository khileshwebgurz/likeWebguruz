import React from "react";

const specializations = [
  {
    title: "PHP",
    items: [
      { label: "Frameworks", value: "CakePHP, Codeigniter, Laravel, Symfony, YII, Zend Framework" },
      { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, MariaDB" },
      { label: "Web Servers", value: "Nginx, Apache" },
      { label: "Deployment", value: "Docker, Kubernetes" },
      { label: "Tools", value: "Composer, PHPUnit" },
      { label: "Code Pipeline Management", value: "GitLab, Bitbucket, Jira, SVN, Ansible, Chef" },
      { label: "CMS & Shopping Carts", value: "WordPress, Drupal, Magento, OpenCart, Joomla, Shopify, WHMCS" },
    ],
  },
  {
    title: "Hosting",
    items: [
      { label: "Languages", value: "PHP, Perl" },
      { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Amazon Redshift, Amazon DynamoDB" },
      { label: "Web Servers", value: "Nginx, Apache" },
      { label: "Deployment", value: "Docker, Kubernetes" },
      { label: "Apps", value: "WHMCS, HostBill" },
      { label: "Platforms", value: "oVirt" },
    ],
  },
  {
    title: "Cross-Platform Development",
    items: [
      { label: "Mobile OS", value: "iOS, Android" },
      { label: "Platforms", value: "Flutter, Xamarin Forms (Android, iOS, UWP, MacOS), NativeScript, ReactNative" },
      { label: "Languages", value: "JavaScript, TypeScript" },
      { label: "Frameworks", value: "Angular, React, Flux, Ionic, PhoneGap" },
      { label: "Markup languages", value: "HTML5, CSS3" },
      { label: "Data languages", value: "RESTful, SOAP, XML, JSON" },
      { label: "Code Pipeline Management", value: "GitLab, Bitbucket, Jira, SVN, Ansible, Chef" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { label: "Languages", value: "JavaScript" },
      { label: "Frameworks and libraries", value: "React JS, Angular JS, Node JS, jQuery" },
      { label: "Markup languages", value: "HTML5, CSS3" },
      { label: "API development", value: "RESTful, SOAP, XML, JSON" },
    ],
  },
  {
    title: "Python",
    items: [
      { label: "Frameworks", value: "Django" },
      { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Amazon Redshift, Amazon DynamoDB" },
      { label: "Web Servers", value: "Nginx, Apache" },
      { label: "Deployment", value: "Docker, Kubernetes" },
      { label: "Code Pipeline Management", value: "GitLab, Bitbucket, Jira, SVN, Ansible, Chef" },
    ],
  },
  {
    title: "Ruby",
    items: [
      { label: "Frameworks", value: "Ruby on Rails" },
      { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Amazon Redshift, Amazon DynamoDB" },
      { label: "Web Servers", value: "Nginx, Apache" },
      { label: "Deployment", value: "Docker, Kubernetes" },
      { label: "Code Pipeline Management", value: "GitLab, Bitbucket, Jira, SVN, Ansible, Chef" },
    ],
  },
];

const WhmcSpecialization = () => {
  return (
    <div className="Commerce-intigration whmcs-specialization py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              We <span> Specialize In </span>
            </h2>
          </div>
          {specializations.map((specialization, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="commerce-list">
                <h5 className="list-head">{specialization.title}</h5>
                <ul>
                  {specialization.items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhmcSpecialization;
