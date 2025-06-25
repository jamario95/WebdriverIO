class EditDashboardComponents {
  edit(editName) {
    const textAreas = {
      name: 'input#displayName',
      description: 'textarea#desc',
      search: '#search',
    };
    return $(textAreas[editName]);
  }
  click(clickName) {
    const buttons = {
      save: 'button._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc',
      editdashboard: '.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc',
    };
    return $(buttons[clickName]);
  }
  get(getName){
    const elements = {
      dashboardname: 'h2.SiP6d2d_8FAAkC',
      dashboarddescription: '.ak-renderer-document > p',
      boardname: 'div.DIkCJzvVP3VODq > div.f8GN4mNvr_EWAE'
    };
    return $(elements[getName])
  }
}

module.exports = EditDashboardComponents;
