Feature('register');

Scenario('fill in form', ({ I }) => {
  async ({ I }) => {
    I.amOnPage('/register');
    I.fillField('form input[id=guest-name]', 'John');
    I.fillField('form input[id=guest-surname]', 'Doe');
    I.fillField('form ngx-intl-tel-input input[name=phone]', '+33123456789'); // For phone input with ngx-intl-tel-input
    I.fillField('form input[id=guest-email]', 'john.doe@example.com');

    // Selecting an option from a dropdown (e.g., "Will you be attending")
    I.selectOption('form select[id=guest-attend]', 'Yes');

    // Filling adults attending
    I.fillField('form input[id=guest-people]', '2');

    // For each additional person, you would do something similar, depending on the number of attendees
    I.fillField('form input[id=guest-person-name-1]', 'Jane');
    I.fillField('form input[id=guest-person-surname-1]', 'Doe');

    // Filling the children attending
    I.fillField('form input[id=guest-children]', '1');

    // Filling each child’s details
    I.fillField('form input[id=guest-child-name-1]', 'Jimmy');
    I.fillField('form input[id=guest-child-age-1]', '5');

    // Arrival and transportation details
    I.selectOption('form select[id=guest-arrival]', '16');
    I.selectOption('form select[id=guest-transportation]', 'car');

    // Willing to carpool
    I.selectOption('form select[id=guest-transport-share]', 'yes');

    // City of arrival
    I.fillField('form input[id=guest-from]', 'Paris');

    // Event attendance
    I.selectOption('form select[id=guest-event]', 'All three events');

    // Dietary restrictions
    I.selectOption('form select[id=guest-dietary]', 'yes');
    I.fillField('form textarea[id=guest-dietary-detail]', 'Vegan');

    // Music preferences (checkboxes)
    I.checkOption('form input[id=music-general]');
    I.checkOption('form input[id=music-pop-rock]');

    // Song recommendation
    I.fillField('form input[id=guest-song]', 'My favorite song');

    // Attending the brunch
    I.selectOption('form select[id=guest-brunch]', 'yes');

    // Additional comments
    I.fillField('form textarea[id=guest-comment]', 'Looking forward to the event!');

  }
});


